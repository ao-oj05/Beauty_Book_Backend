import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicesService {
  private readonly services = [
    {
      id: 1,
      nombre: "Uñas de Gel",
      categoria: "Uñas",
      descripcion: "Aplicación de gel con diseño personalizado.",
      duracion: "90 minutos",
      especialista: "María García",
      precio: 350,
      imagen: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=400&auto=format&fit=crop",
    }
  ];

  findAll() {
    return this.services;
  }

  create(serviceDto: any) {
    const newService = { id: Date.now(), ...serviceDto };
    this.services.push(newService);
    return newService;
  }
}
