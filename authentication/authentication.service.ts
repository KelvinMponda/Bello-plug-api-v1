import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthenticationService {
    constructor(
        @Inject('USER_SERVICE') private readonly userService: UsersService
    ){}
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findUserByUsername(username);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;

    }
}
