import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: any): Promise<{
        access_token: string;
        user: any;
    }>;
    register(body: any): Promise<{
        id: number;
        email: string;
        nombre: string;
        telefono: string | null;
        tipo: string;
        createdAt: Date;
    }>;
}
