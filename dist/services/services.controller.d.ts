import { ServicesService } from './services.service';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
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
    create(body: any): Promise<{
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
