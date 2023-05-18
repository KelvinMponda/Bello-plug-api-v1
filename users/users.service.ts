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

  // async findOneBy(id: number): Promise<Users | null> {
  //   return this.userRepository.findOneBy(({ id })) 
  // }
  
  findUserByUsername(username: string) {
    return this.userRepository.findOneBy({ username });

  }

  update(id: number, userDetails: UpdateUserDto) {
    return this.userRepository.update({ id }, { ...userDetails });
  }

  delete(id: number) {
    return this.userRepository.delete({ id });
  }
}
