import { Injectable } from '@nestjs/common';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ){}
  
  createUser(User: CreateUserDto) {
    const newUser = this.userRepository.create({...User});
    return this.userRepository.save(newUser);
  }

  findOne(id: number): Promise<Users | null> {
    return this.userRepository.findOneBy({ id }) 
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id }, { ...updateUserDto });
  }

  delete(id: number) {
    return this.userRepository.delete({ id });
  }
}
