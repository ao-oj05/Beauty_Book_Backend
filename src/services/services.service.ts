import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.servicio.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async create(data: any) {
    return this.prisma.servicio.create({
      data: {
        nombre: data.nombre,
        categoria: data.categoria,
        descripcion: data.descripcion || null,
        duracion: data.duracion,
        especialista: data.especialista,
        precio: parseFloat(data.precio),
        imagen: data.imagen || null,
      },
    });
  }
}
