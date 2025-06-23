import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private users: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(username: string, email: string, password: string) {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = this.users.create({ username, email, passwordHash });
    await this.users.save(user);
    return this.jwtService.sign({ sub: user.id });
  }

  async validateUser(username: string, password: string) {
    const user = await this.users.findOne({ where: { username } });
    if (!user) return null;
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (ok) return user;
    return null;
  }

  async login(user: User) {
    return this.jwtService.sign({ sub: user.id });
  }
}
