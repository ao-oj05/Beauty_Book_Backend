"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
let AppointmentsService = class AppointmentsService {
    appointments = [];
    findAll() {
        return this.appointments;
    }
    create(appointmentDto) {
        const newAppointment = {
            id: `BB-${Date.now().toString().slice(-6)}`,
            ...appointmentDto,
            estado: 'Pendiente',
        };
        this.appointments.push(newAppointment);
        return newAppointment;
    }
    updateStatus(id, status) {
        const index = this.appointments.findIndex(a => a.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('Cita no encontrada');
        }
        this.appointments[index].estado = status;
        return this.appointments[index];
    }
};
exports.AppointmentsService = AppointmentsService;
exports.AppointmentsService = AppointmentsService = __decorate([
    (0, common_1.Injectable)()
], AppointmentsService);
//# sourceMappingURL=appointments.service.js.map