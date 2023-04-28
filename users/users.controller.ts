import { Controller, Get, Post, Body, Patch, Param, Delete, Req, ParseIntPipe, HttpStatus, } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    // @Req() req: Request,
    // @Res() res: Response,
  ) {
    const user = this.usersService.findOne(+id);
    if (user!= null) {
      return user;
    } else {
      //return 'User not found';
      console.log('User not found')
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
function Res(): (target: UsersController, propertyKey: "findOne", parameterIndex: 2) => void {
  throw new Error('Function not implemented.');
}

