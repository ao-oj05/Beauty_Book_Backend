import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    validateUser(email: string, pass: string): Promise<any>;
    login(userDto: any): Promise<{
        access_token: string;
        user: any;
    }>;
    register(userDto: any): Promise<any>;
}
