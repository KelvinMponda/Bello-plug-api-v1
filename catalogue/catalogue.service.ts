import { Injectable } from '@nestjs/common';
import { CreateCatalogueDto } from './dto/create-catalogue.dto';
import { UpdateCatalogueDto } from './dto/update-catalogue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Catalogue } from './entities/catalogue.entity';
import { Repository } from 'typeorm';
//import { Location } from 'src/location/entities/location.entity';

@Injectable()
export class CatalogueService {
  constructor(
    @InjectRepository(Catalogue)
    private readonly productRepository: Repository<Catalogue>,
    //private readonly locationRepository: Repository<Location>,
  ){}

  

  // async assignLocationToCatalogue(catalogueId: number, locationId: number): Promise<void> {
  //   const catalogue = await this.productRepository.findOneBy(catalogueId);
  //   const location = await this.locationRepository.findOne(locationId);

  //   catalogue.location = location;
  //   await this.productRepository.save(catalogue);
  // }

  async createProduct(Catalogue: CreateCatalogueDto) {
    const newProduct = this.productRepository.create({...Catalogue})
    return this.productRepository.save(newProduct);
  }

  async findAll(): Promise<Catalogue[]>{
    return this.productRepository.find({relations: ['adverts']});
  }

  async findById(id: number): Promise<Catalogue | null> {
    return this.productRepository.findOneBy({ id });
  }

  update(id: number, catalogueDetails: UpdateCatalogueDto) {
    return this.productRepository.update({ id }, { ...catalogueDetails });
  }

  async remove(id: number): Promise<void>{
    await this.productRepository.delete(id);
  }
}
