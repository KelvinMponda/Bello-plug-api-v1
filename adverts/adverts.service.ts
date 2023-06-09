import { Injectable, Logger } from '@nestjs/common';
import { CreateAdvertDto } from './dto/create-advert.dto';
import { UpdateAdvertDto } from './dto/update-advert.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Advert } from './entities/advert.entity';
import { Repository } from 'typeorm';
import { Catalogue } from 'src/catalogue/entities/catalogue.entity';
import { Location } from 'src/location/entities/location.entity';


@Injectable()
export class AdvertsService {
  private logger = new Logger(AdvertsService.name);
  constructor(
    @InjectRepository(Advert)
    private advertRepository: Repository<Advert>,

    @InjectRepository(Location)
    private locationRepository: Repository<Location>,

    @InjectRepository(Catalogue)
    private catalogueRepository: Repository<Catalogue>,

  ) {}

  async create(id, ad: CreateAdvertDto) {
    this.logger.log(id);

    const catalogue = await this.catalogueRepository.findOne({ where: { id }});
    this.logger.log({ ...catalogue });

    const location = await this.locationRepository.findOne({ where: { id }});
    this.logger.log({ ...catalogue });

    const date = new Date();

    const newAd = this.advertRepository.create({ ...ad, catalogue, date, location });
    return this.advertRepository.save(newAd);
  }

  async findAll() {
    return this.advertRepository.find({ relations: ['catalogue', 'location']});
  }

  async findById(id: number): Promise<Advert[]> {
    try{
      return this.advertRepository.find({
        where: {
          catalogue: {
            id: id,
          },

          location: {
            id: id
          },
        },
      });
    }
    catch{
      throw new Error('Error retrieving a product with id ${id}: ${error.message}')
    }
  }


  async update(id: number, advertDetails: UpdateAdvertDto) {
    return this.advertRepository.update({ id }, { ...advertDetails });
  }

  async remove(id: number): Promise<void>{
    await this.advertRepository.delete(id);
  }
}
