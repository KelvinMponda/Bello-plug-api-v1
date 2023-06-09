import { Module } from '@nestjs/common';
import { AdvertsService } from './adverts.service';
import { AdvertsController } from './adverts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advert } from './entities/advert.entity';
import { Catalogue } from 'src/catalogue/entities/catalogue.entity';
import { Location } from 'src/location/entities/location.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Advert, Location, Catalogue])],
  controllers: [AdvertsController],
  providers: [AdvertsService],
  exports: [TypeOrmModule]
})
export class AdvertsModule {}
