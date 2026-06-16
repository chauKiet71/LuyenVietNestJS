"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const crypto = require("crypto");
let AuthService = class AuthService {
    constructor(db) {
        this.db = db;
    }
    hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
        const hash = crypto.pbkdf2Sync(password, salt, 120000, 64, 'sha512').toString('hex');
        return `${salt}:${hash}`;
    }
    verifyPassword(password, storedHash) {
        const [salt, hash] = String(storedHash || '').split(':');
        if (!salt || !hash)
            return false;
        const expected = Buffer.from(this.hashPassword(password, salt));
        const actual = Buffer.from(storedHash);
        return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
    }
    publicUser(row) {
        return {
            id: row.id,
            fullName: row.full_name,
            email: row.email,
            role: row.role,
            isActive: row.is_active,
            createdAt: row.created_at,
            updatedAt: row.updated_at,
            lastLoginAt: row.last_login_at,
        };
    }
    async register(fullName, email, password) {
        if (fullName.length < 2) {
            throw new common_1.HttpException('Vui lòng nhập họ và tên.', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new common_1.HttpException('Email không hợp lệ.', common_1.HttpStatus.BAD_REQUEST);
        }
        if (password.length < 6) {
            throw new common_1.HttpException('Mật khẩu cần tối thiểu 6 ký tự.', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const result = await this.db.query(`INSERT INTO users (full_name, email, password_hash)
         VALUES ($1, $2, $3)
         RETURNING id, full_name, email, role, is_active, created_at, updated_at, last_login_at`, [fullName, email, this.hashPassword(password)]);
            return { user: this.publicUser(result.rows[0]) };
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.HttpException('Email này đã được đăng ký.', common_1.HttpStatus.CONFLICT);
            }
            throw new common_1.HttpException(error.message || 'Lỗi server.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async login(email, password) {
        let result;
        try {
            result = await this.db.query('SELECT * FROM users WHERE email = $1', [email]);
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Lỗi cơ sở dữ liệu.', common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
        const user = result.rows[0];
        if (!user || !this.verifyPassword(password, user.password_hash)) {
            throw new common_1.HttpException('Email hoặc mật khẩu không đúng.', common_1.HttpStatus.UNAUTHORIZED);
        }
        if (!user.is_active) {
            throw new common_1.HttpException('Tài khoản đã bị khóa.', common_1.HttpStatus.FORBIDDEN);
        }
        const updated = await this.db.query(`UPDATE users SET last_login_at = NOW(), updated_at = NOW()
       WHERE id = $1
       RETURNING id, full_name, email, role, is_active, created_at, updated_at, last_login_at`, [user.id]);
        return { user: this.publicUser(updated.rows[0]) };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AuthService);
//# sourceMappingURL=auth.service.js.map