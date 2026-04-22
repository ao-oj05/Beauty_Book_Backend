import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: any[] = [];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async create(user: User): Promise<User> {
    const newUser = { id: Date.now().toString(), ...user };
    this.users.push(newUser);
    return newUser;
  }
}
