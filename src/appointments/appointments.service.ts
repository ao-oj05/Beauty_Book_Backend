import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.cita.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async create(data: any) {
    return this.prisma.cita.create({
      data: {
        fecha: data.fecha,
        hora: data.hora,
        estado: 'Pendiente',
        servicioNombre: data.servicio,
        categoria: data.categoria,
        especialista: data.especialista,
        precio: data.precio ? parseFloat(data.precio) : null,
        duracion: data.duracion,
      },
    });
  }

  async updateStatus(id: string, status: string) {
    const cita = await this.prisma.cita.findUnique({ where: { id } });
    if (!cita) {
      throw new NotFoundException('Cita no encontrada');
    }
    return this.prisma.cita.update({
      where: { id },
      data: { estado: status },
    });
  }
}
