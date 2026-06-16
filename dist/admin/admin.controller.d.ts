import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getAllUsers(headers: Record<string, string>, queryAdminKey?: string): Promise<{
        users: {
            id: any;
            fullName: any;
            email: any;
            role: any;
            isActive: any;
            createdAt: any;
            updatedAt: any;
            lastLoginAt: any;
        }[];
    }>;
    updateUser(id: string, body: any, headers: Record<string, string>, queryAdminKey?: string): Promise<{
        user: {
            id: any;
            fullName: any;
            email: any;
            role: any;
            isActive: any;
            createdAt: any;
            updatedAt: any;
            lastLoginAt: any;
        };
    }>;
    deleteUser(id: string, headers: Record<string, string>, queryAdminKey?: string): Promise<{
        ok: boolean;
    }>;
}
