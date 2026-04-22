import { PrismaService } from '../prisma/prisma.service';
export declare class ServicesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        categoria: string;
        descripcion: string | null;
        duracion: string;
        especialista: string;
        precio: number;
        imagen: string | null;
    }[]>;
    create(data: any): Promise<{
        id: number;
        nombre: string;
        createdAt: Date;
        categoria: string;
        descripcion: string | null;
        duracion: string;
        especialista: string;
        precio: number;
        imagen: string | null;
    }>;
}
