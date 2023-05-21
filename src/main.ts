import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import GlobalErrorHandler from './errors/Global.errors';
import TypeOrmExceptionFilter from './errors/typeOrm.fitler';
import ValidationModule from './validations/validation.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app
  .useGlobalFilters(new GlobalErrorHandler())
  .useGlobalPipes(new ValidationPipe())
  .useGlobalFilters(new TypeOrmExceptionFilter())
  .useStaticAssets(join(__dirname, "..", "public"))
  .setBaseViewsDir(join(__dirname, "..", "public/views"))
  .setViewEngine('ejs');
  
  useContainer(app.select(ValidationModule), {fallbackOnErrors: true})

  await app.listen(3000);
}
bootstrap();
