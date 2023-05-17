import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './controller/authentication/authentication.controller';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './utils/local.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Users]), PassportModule],
  providers: [
    {
      provide: 'AUTHENTICAION_SERVICE',
      useClass: AuthenticationService, 
    },
    {
      provide: 'USER_SERVICE',
      useClass:  UsersService,
    },
    LocalStrategy,
  ],
  controllers: [AuthenticationController]
})
export class AuthenticationModule {}
