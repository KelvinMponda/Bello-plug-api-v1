import { Injectable } from '@nestjs/common';
import { CreateAdvertDto } from './dto/create-advert.dto';
import { UpdateAdvertDto } from './dto/update-advert.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Advert } from './entities/advert.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdvertsService {
  constructor(
    @InjectRepository(Advert)
    private advertRepository: Repository<Advert>,
  ) {}
  create(Advert: CreateAdvertDto) {
    const newAd = this.advertRepository.create({...Advert})
    return this.advertRepository.save(newAd);
  }

  // findAll() {
  //   return `This action returns all adverts`;
  // }

  findOne(id: number): Promise<Advert | null> {
    return this.advertRepository.findOneBy({ id });
  }

  update(id: number, advertDetails: UpdateAdvertDto) {
    return this.advertRepository.update({ id }, { ...advertDetails });
  }

  async remove(id: number): Promise<void>{
    await this.advertRepository.delete(id);
  }
}
