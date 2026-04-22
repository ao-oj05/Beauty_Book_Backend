import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(email: string): Promise<{
        id: number;
        email: string;
        nombre: string;
        password: string;
        telefono: string | null;
        tipo: string;
        createdAt: Date;
    } | null>;
    create(data: any): Promise<{
        id: number;
        email: string;
        nombre: string;
        password: string;
        telefono: string | null;
        tipo: string;
        createdAt: Date;
    }>;
}
