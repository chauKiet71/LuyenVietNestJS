import { DatabaseService } from '../database/database.service';
export declare class AuthService {
    private readonly db;
    constructor(db: DatabaseService);
    hashPassword(password: string, salt?: string): string;
    verifyPassword(password: string, storedHash: string): boolean;
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
    register(fullName: string, email: string, password: string): Promise<{
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
    login(email: string, password: string): Promise<{
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
}
