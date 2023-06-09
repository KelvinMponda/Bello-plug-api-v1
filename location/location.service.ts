import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ){}

  createLocation(Location: CreateLocationDto) {
    const newLocation = this.locationRepository.create({...Location})

    try{
      return this.locationRepository.save(newLocation);
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Cannot create location',
      }, HttpStatus.BAD_GATEWAY, {
        cause: error
      });
    }
  }

  async findById(id: number): Promise<Location | null> {
    try{
      return this.locationRepository.findOneBy( {id} );
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Cannot get the location',
      }, HttpStatus.BAD_GATEWAY, {
        cause: error
      });
    }
  }

  async update(id: number, locationDetails: UpdateLocationDto) {
    try{
      return this.locationRepository.update({ id }, { ...locationDetails });
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Unable to update the location',
      }, HttpStatus.BAD_GATEWAY, {
        cause: error
      });
    }
  }

  async remove(id: number): Promise<void>{
    try{
      await this.locationRepository.delete(id);
    }
    catch(error){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Unable to delete the location',
      }, HttpStatus.BAD_GATEWAY, {
        cause: error
      });
    }
  }
}
