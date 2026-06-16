import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AdminService {
  constructor(private readonly db: DatabaseService) {}

  publicUser(row: any) {
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

  isAdminRequest(headers: Record<string, string | string[] | undefined>, queryAdminKey?: string): boolean {
    const adminKey = process.env.ADMIN_KEY || 'admin-dev-key';
    const headerKey = headers['x-admin-key'];
    return (headerKey || queryAdminKey) === adminKey;
  }

  async getAllUsers(headers: Record<string, string | string[] | undefined>, queryAdminKey?: string) {
    if (!this.isAdminRequest(headers, queryAdminKey)) {
      throw new HttpException('Admin key không hợp lệ.', HttpStatus.UNAUTHORIZED);
    }

    try {
      const result = await this.db.query(
        `SELECT id, full_name, email, role, is_active, created_at, updated_at, last_login_at
         FROM users
         ORDER BY created_at DESC`,
      );
      return { users: result.rows.map(row => this.publicUser(row)) };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateUser(
    id: string,
    body: { fullName: string; email: string; role: string; isActive: boolean },
    headers: Record<string, string | string[] | undefined>,
    queryAdminKey?: string
  ) {
    if (!this.isAdminRequest(headers, queryAdminKey)) {
      throw new HttpException('Admin key không hợp lệ.', HttpStatus.UNAUTHORIZED);
    }

    const fullName = String(body.fullName || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const role = String(body.role || 'student').trim();
    const isActive = body.isActive === true;

    if (!fullName || !email) {
      throw new HttpException('Tên và email không được để trống.', HttpStatus.BAD_REQUEST);
    }

    try {
      const result = await this.db.query(
        `UPDATE users
         SET full_name = $1, email = $2, role = $3, is_active = $4, updated_at = NOW()
         WHERE id = $5
         RETURNING id, full_name, email, role, is_active, created_at, updated_at, last_login_at`,
        [fullName, email, role, isActive, id],
      );
      if (!result.rows[0]) {
        throw new HttpException('Không tìm thấy user.', HttpStatus.NOT_FOUND);
      }
      return { user: this.publicUser(result.rows[0]) };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteUser(
    id: string,
    headers: Record<string, string | string[] | undefined>,
    queryAdminKey?: string
  ) {
    if (!this.isAdminRequest(headers, queryAdminKey)) {
      throw new HttpException('Admin key không hợp lệ.', HttpStatus.UNAUTHORIZED);
    }

    try {
      const result = await this.db.query('DELETE FROM users WHERE id = $1', [id]);
      if (result.rowCount === 0) {
        throw new HttpException('Không tìm thấy user.', HttpStatus.NOT_FOUND);
      }
      return { ok: true };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
