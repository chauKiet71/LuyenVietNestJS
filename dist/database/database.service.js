"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
let DatabaseService = class DatabaseService {
    constructor() {
        this.pool = null;
    }
    async onModuleInit() {
        const databaseUrl = process.env.DATABASE_URL;
        if (!databaseUrl) {
            console.warn('DATABASE_URL is missing. API database routes will return 503.');
            return;
        }
        this.pool = new pg_1.Pool({
            connectionString: databaseUrl,
            ssl: { rejectUnauthorized: false },
        });
        try {
            await this.ensureSchema();
            console.log('Database schema initialization successful.');
        }
        catch (error) {
            console.error('Cannot initialize database schema:', error);
        }
    }
    async onModuleDestroy() {
        if (this.pool) {
            await this.pool.end();
        }
    }
    getPool() {
        return this.pool;
    }
    async query(text, params) {
        if (!this.pool) {
            throw new Error('DATABASE_URL chưa được cấu hình. Hãy đặt Neon PostgreSQL connection string rồi chạy lại server.');
        }
        return this.pool.query(text, params);
    }
    async ensureSchema() {
        if (!this.pool)
            return;
        await this.pool.query('CREATE EXTENSION IF NOT EXISTS pgcrypto;');
        await this.pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        full_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'student',
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        last_login_at TIMESTAMPTZ
      );
    `);
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)()
], DatabaseService);
//# sourceMappingURL=database.service.js.map