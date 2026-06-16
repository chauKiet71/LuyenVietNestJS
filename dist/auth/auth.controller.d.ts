import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: any): Promise<{
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
    login(body: any): Promise<{
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
