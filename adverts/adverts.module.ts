import { Module } from '@nestjs/common';
import { AdvertsService } from './adverts.service';
import { AdvertsController } from './adverts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advert } from './entities/advert.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Advert])],
  controllers: [AdvertsController],
  providers: [AdvertsService],
  exports: [TypeOrmModule]
})
export class AdvertsModule {}
