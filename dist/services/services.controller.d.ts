import { ServicesService } from './services.service';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    findAll(): {
        id: number;
        nombre: string;
        categoria: string;
        descripcion: string;
        duracion: string;
        especialista: string;
        precio: number;
        imagen: string;
    }[];
    create(body: any): any;
}
