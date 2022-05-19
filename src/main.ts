import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // config do class-validator e do class-transformer
  app.useGlobalPipes(new ValidationPipe());

  //config do Swagger
  const config = new DocumentBuilder()
  .setTitle('PizzaFresh')
  .setDescription('Aplicação para gestão de uma pizzaria')
  .setVersion('1.0.0')
  .addTag('status')
  .addTag('table')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

  await app.listen(3333);
}
bootstrap();
