import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import GlobalErrorHandler from './errors/Global.errors';
import { PrismaExceptionFilter } from './errors/prisma.filter';
import TypeOrmExceptionFilter from './errors/typeOrm.fitler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GlobalErrorHandler());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new PrismaExceptionFilter())
  app.useGlobalFilters(new TypeOrmExceptionFilter())
  await app.listen(3000);
}
bootstrap();
