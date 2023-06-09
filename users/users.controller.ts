import { Controller, Get, Post, Body, Patch, Param, Delete, Req, ParseIntPipe, HttpStatus, HttpException, UsePipes, ValidationPipe, ClassSerializerInterceptor, UseInterceptors, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Expose } from 'class-transformer';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  //@UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('profile/:id')
  async findOne(
    @Param('id', ParseIntPipe) id: number) 
    {
    const user = this.usersService.findOneBy(+id);
      if (user) {
        return user;
      }
      else {
        throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
      }
  }


  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('username')
  async findOneBy(
    @Param('username') username: string
    ){
      return this.usersService.findUserByUsername(username);
    }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
function Res(): (target: UsersController, propertyKey: "findOne", parameterIndex: 2) => void {
  throw new Error('Function not implemented.');
}

