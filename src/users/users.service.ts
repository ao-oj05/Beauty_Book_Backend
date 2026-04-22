import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string) {
    return this.prisma.usuario.findUnique({ where: { email } });
  }

  async create(data: any) {
    return this.prisma.usuario.create({ data });
  }
}
