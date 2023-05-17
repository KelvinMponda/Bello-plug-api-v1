import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { UserMiddleware } from './middlewares/users.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer
      .apply(UserMiddleware)
      .forRoutes(UsersController)
  }
}
