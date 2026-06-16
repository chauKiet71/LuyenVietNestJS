import { DatabaseService } from '../database/database.service';
export declare class AdminService {
    private readonly db;
    constructor(db: DatabaseService);
    publicUser(row: any): {
        id: any;
        fullName: any;
        email: any;
        role: any;
        isActive: any;
        createdAt: any;
        updatedAt: any;
        lastLoginAt: any;
    };
    isAdminRequest(headers: Record<string, string | string[] | undefined>, queryAdminKey?: string): boolean;
    getAllUsers(headers: Record<string, string | string[] | undefined>, queryAdminKey?: string): Promise<{
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
    updateUser(id: string, body: {
        fullName: string;
        email: string;
        role: string;
        isActive: boolean;
    }, headers: Record<string, string | string[] | undefined>, queryAdminKey?: string): Promise<{
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
    deleteUser(id: string, headers: Record<string, string | string[] | undefined>, queryAdminKey?: string): Promise<{
        ok: boolean;
    }>;
}
