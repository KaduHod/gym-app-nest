import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import GlobalErrorHandler from './errors/Global.errors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GlobalErrorHandler());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
