"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
let ServicesService = class ServicesService {
    services = [
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
    create(serviceDto) {
        const newService = { id: Date.now(), ...serviceDto };
        this.services.push(newService);
        return newService;
    }
};
exports.ServicesService = ServicesService;
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)()
], ServicesService);
//# sourceMappingURL=services.service.js.map