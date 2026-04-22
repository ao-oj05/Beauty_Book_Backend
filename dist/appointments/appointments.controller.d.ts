import { AppointmentsService } from './appointments.service';
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
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
    create(body: any): Promise<{
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
