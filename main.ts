import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  //paste here
  const config = new DocumentBuilder()
    .setTitle('Bello-Plug')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('new ad')
    .addTag('Search')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
