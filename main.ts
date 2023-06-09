import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,  SwaggerModule } from '@nestjs/swagger';
import { SwaggerDocumentOptions } from './SwaggerDocumentOptions';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  

  //paste here
  const config = new DocumentBuilder()
    .setTitle('Bello-Plug')
    .setDescription('An api for an online second-hand clothes selling website')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  const options: SwaggerDocumentOptions =  {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
