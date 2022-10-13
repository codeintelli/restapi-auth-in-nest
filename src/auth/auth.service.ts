import { Injectable } from '@nestjs/common';
import { Payload } from '../types/payload';
import { sign } from 'jsonwebtoken';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private usersService: UserService) { }

    async signPayload(payload: Payload) {
        return sign(payload, process.env.SECRET_KEY, { expiresIn: '7d' });
    }
    async validateUser(payload: Payload) {
        return await this.usersService.findByPayload(payload);
    }
}