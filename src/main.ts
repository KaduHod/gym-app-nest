import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import GlobalErrorHandler from './errors/Global.errors';
import TypeOrmExceptionFilter from './errors/typeOrm.fitler';
import ValidationModule from './modules/validations/validation.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { getEnv } from './config/env'
import * as hbs from 'express-handlebars';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app
  .useGlobalFilters(new GlobalErrorHandler())
  .useGlobalPipes(new ValidationPipe())
  .useGlobalFilters(new TypeOrmExceptionFilter())
  .useStaticAssets(join(__dirname, "..", "/public"))
  .setBaseViewsDir(join(__dirname, "..", "/public/views"))
  .setViewEngine('hbs');

  app.engine(
    'hbs', 
    hbs.engine({
      layoutsDir: "public/views/layouts",
      partialsDir: "public/views/partials",
      defaultLayout: "default",
      extname: 'hbs',
    }),
  )

  console.log(join(__dirname, '..', 'public'))
  useContainer(app.select(ValidationModule), {fallbackOnErrors: true})

  await app.listen(getEnv()['APP_PORT']);
}
bootstrap();
