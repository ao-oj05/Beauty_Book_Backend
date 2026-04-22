import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(userDto: any) {
    const user = await this.validateUser(userDto.email, userDto.password);
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    // Simulamos un JWT con un token básico
    return {
      access_token: 'fake-jwt-token-' + user.id,
      user: user,
    };
  }

  async register(userDto: any) {
    const existingUser = await this.usersService.findOne(userDto.email);
    if (existingUser) {
      throw new UnauthorizedException('El usuario ya existe');
    }
    const newUser = await this.usersService.create(userDto);
    const { password, ...result } = newUser;
    return result;
  }
}
