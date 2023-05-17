import { Injectable } from '@nestjs/common';
import { CreateCatalogueDto } from './dto/create-catalogue.dto';
import { UpdateCatalogueDto } from './dto/update-catalogue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Catalogue } from './entities/catalogue.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatalogueService {
  constructor(
    @InjectRepository(Catalogue)
    private productRepository: Repository<Catalogue>,
  ){}

  createProduct(Catalogue: CreateCatalogueDto) {
    const newProduct = this.productRepository.create({...Catalogue})
    return this.productRepository.save(newProduct);
  }

  findAll(): Promise<Catalogue[]>{
    return this.productRepository.find();
  }

  findOne(id: number): Promise<Catalogue | null> {
    return this.productRepository.findOneBy({ id });
  }

  update(id: number, catalogueDetails: UpdateCatalogueDto) {
    return this.productRepository.update({ id }, { ...catalogueDetails });
  }

  async remove(id: number): Promise<void>{
    await this.productRepository.delete(id);
  }
}
