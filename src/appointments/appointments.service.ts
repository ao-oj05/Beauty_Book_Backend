import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppointmentsService {
  private appointments: any[] = [];

  findAll() {
    return this.appointments;
  }

  create(appointmentDto: any) {
    const newAppointment = {
      id: `BB-${Date.now().toString().slice(-6)}`,
      ...appointmentDto,
      estado: 'Pendiente', // Default status
    };
    this.appointments.push(newAppointment);
    return newAppointment;
  }

  updateStatus(id: string, status: string) {
    const index = this.appointments.findIndex(a => a.id === id);
    if (index === -1) {
      throw new NotFoundException('Cita no encontrada');
    }
    this.appointments[index].estado = status;
    return this.appointments[index];
  }
}
