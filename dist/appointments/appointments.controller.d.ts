import { AppointmentsService } from './appointments.service';
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    findAll(): any[];
    create(body: any): any;
    updateStatus(id: string, status: string): any;
}
