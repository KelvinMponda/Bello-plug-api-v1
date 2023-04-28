import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/user.entity';
import { CatalogueModule } from './catalogue/catalogue.module';
import { AdvertsModule } from './adverts/adverts.module';

@Module({
 
    controllers: [AppController,],
    providers: [AppService],
    imports: [UsersModule,
      TypeOrmModule.forRoot({
        type: 'mysql',
        host:'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'Bello_plug',
        entities: [Users],
      }),
      CatalogueModule,
      AdvertsModule,
    ],

})
export class AppModule {}
