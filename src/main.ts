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
import { component, capitalizeFirstLetter, concat, dropDown, equal, safeStr, json } from './utils/handlebars.helper';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app
  .use(cookieParser())
  .useGlobalFilters(new GlobalErrorHandler())
  .useGlobalPipes(new ValidationPipe())
  .useGlobalFilters(new TypeOrmExceptionFilter())
  .useStaticAssets(join(__dirname, "..", "/public"))
  .setBaseViewsDir(join(__dirname, "..", "/public/views"))
  .setViewEngine('hbs');

  const engine = hbs.engine({
    layoutsDir: "public/views/layouts",
    partialsDir: "public/views/partials",
    defaultLayout: "logged-default",
    extname: 'hbs',
    helpers: { 
      concat, 
      capitalizeFirstLetter, 
      component, 
      dropDown, 
      equal, 
      safeStr,
      json 
    }
  })

  app.engine('hbs', engine)

  useContainer(app.select(ValidationModule), {fallbackOnErrors: true})

  await app.listen(getEnv().APP_PORT);
}
bootstrap();
