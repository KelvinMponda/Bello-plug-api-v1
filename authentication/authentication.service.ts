import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthenticationService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ){}
    
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findUserByUsername(username);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;

    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
