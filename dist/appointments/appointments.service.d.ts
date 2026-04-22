import { PrismaService } from '../prisma/prisma.service';
export declare class AppointmentsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        categoria: string | null;
        duracion: string | null;
        especialista: string | null;
        precio: number | null;
        fecha: string;
        hora: string;
        estado: string;
        usuarioId: number | null;
        servicioId: number | null;
        servicioNombre: string | null;
    }[]>;
    create(data: any): Promise<{
        id: string;
        createdAt: Date;
        categoria: string | null;
        duracion: string | null;
        especialista: string | null;
        precio: number | null;
        fecha: string;
        hora: string;
        estado: string;
        usuarioId: number | null;
        servicioId: number | null;
        servicioNombre: string | null;
    }>;
    updateStatus(id: string, status: string): Promise<{
        id: string;
        createdAt: Date;
        categoria: string | null;
        duracion: string | null;
        especialista: string | null;
        precio: number | null;
        fecha: string;
        hora: string;
        estado: string;
        usuarioId: number | null;
        servicioId: number | null;
        servicioNombre: string | null;
    }>;
}
