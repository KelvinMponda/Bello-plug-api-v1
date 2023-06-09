import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { LocalAuthGuard } from 'src/authentication/local-auth.guard'; 
import { AuthenticationService } from 'src/authentication/authentication.service';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { Users } from 'src/users/entities/user.entity';


@Controller('authentication')
export class AuthenticationController {
    constructor(
        private AuthenticationService: AuthenticationService
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')  
    async login(@Request() req) {
        return this.AuthenticationService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getprofile(@Request() req) {
        console.log("User found");
        return [
            req.user,
            req.phoneNumber,
            req.id,
            req.gender,
            req.email
        ]
        //return req.user;
        
    }
}
