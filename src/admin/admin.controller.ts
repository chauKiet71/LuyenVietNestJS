import { Controller, Get, Patch, Delete, Body, Param, Headers, Query } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('api/admin/users')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async getAllUsers(
    @Headers() headers: Record<string, string>,
    @Query('adminKey') queryAdminKey?: string
  ) {
    return this.adminService.getAllUsers(headers, queryAdminKey);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() body: any,
    @Headers() headers: Record<string, string>,
    @Query('adminKey') queryAdminKey?: string
  ) {
    return this.adminService.updateUser(id, body, headers, queryAdminKey);
  }

  @Delete(':id')
  async deleteUser(
    @Param('id') id: string,
    @Headers() headers: Record<string, string>,
    @Query('adminKey') queryAdminKey?: string
  ) {
    return this.adminService.deleteUser(id, headers, queryAdminKey);
  }
}
