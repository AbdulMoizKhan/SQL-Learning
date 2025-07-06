import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class AuthService {
    private users;
    private jwtService;
    constructor(users: Repository<User>, jwtService: JwtService);
    register(username: string, email: string, password: string): Promise<string>;
    validateUser(username: string, password: string): Promise<User>;
    login(user: User): Promise<string>;
}
