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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let AdminService = class AdminService {
    constructor(db) {
        this.db = db;
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
    isAdminRequest(headers, queryAdminKey) {
        const adminKey = process.env.ADMIN_KEY || 'admin-dev-key';
        const headerKey = headers['x-admin-key'];
        return (headerKey || queryAdminKey) === adminKey;
    }
    async getAllUsers(headers, queryAdminKey) {
        if (!this.isAdminRequest(headers, queryAdminKey)) {
            throw new common_1.HttpException('Admin key không hợp lệ.', common_1.HttpStatus.UNAUTHORIZED);
        }
        try {
            const result = await this.db.query(`SELECT id, full_name, email, role, is_active, created_at, updated_at, last_login_at
         FROM users
         ORDER BY created_at DESC`);
            return { users: result.rows.map(row => this.publicUser(row)) };
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Lỗi server.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateUser(id, body, headers, queryAdminKey) {
        if (!this.isAdminRequest(headers, queryAdminKey)) {
            throw new common_1.HttpException('Admin key không hợp lệ.', common_1.HttpStatus.UNAUTHORIZED);
        }
        const fullName = String(body.fullName || '').trim();
        const email = String(body.email || '').trim().toLowerCase();
        const role = String(body.role || 'student').trim();
        const isActive = body.isActive === true;
        if (!fullName || !email) {
            throw new common_1.HttpException('Tên và email không được để trống.', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const result = await this.db.query(`UPDATE users
         SET full_name = $1, email = $2, role = $3, is_active = $4, updated_at = NOW()
         WHERE id = $5
         RETURNING id, full_name, email, role, is_active, created_at, updated_at, last_login_at`, [fullName, email, role, isActive, id]);
            if (!result.rows[0]) {
                throw new common_1.HttpException('Không tìm thấy user.', common_1.HttpStatus.NOT_FOUND);
            }
            return { user: this.publicUser(result.rows[0]) };
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Lỗi server.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteUser(id, headers, queryAdminKey) {
        if (!this.isAdminRequest(headers, queryAdminKey)) {
            throw new common_1.HttpException('Admin key không hợp lệ.', common_1.HttpStatus.UNAUTHORIZED);
        }
        try {
            const result = await this.db.query('DELETE FROM users WHERE id = $1', [id]);
            if (result.rowCount === 0) {
                throw new common_1.HttpException('Không tìm thấy user.', common_1.HttpStatus.NOT_FOUND);
            }
            return { ok: true };
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Lỗi server.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], AdminService);
//# sourceMappingURL=admin.service.js.map