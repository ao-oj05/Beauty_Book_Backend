export declare class ServicesService {
    private readonly services;
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
    create(serviceDto: any): any;
}
