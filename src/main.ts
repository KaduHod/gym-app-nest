import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import GlobalErrorHandler from './errors/Global.errors';
import TypeOrmExceptionFilter from './errors/typeOrm.fitler';
import ValidationModule from './modules/validations/validation.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { getEnv } from './config/env'
import * as hbs from 'express-handlebars';
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
    helpers:{
      concat: function() {
        return Array.prototype.slice.call(arguments, 0, -1).join('');
      },
      capitalizeFirstLetter: function(string:string){
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
      dropDown: function(){
        const [id ,title, classes, options] = arguments
        const content = options.fn(this)
        return `
        <div id='${id}' class="${classes || ""} select-none hover:cursor-pointer h-fit" 
          data-drop-container="true"
          data-drop-down-allow-close="true"
          >
          <div class="flex justify-between" data-drop-down-allow-close="true">
            <h2 data-drop-down-allow-close="true">${title || ""}</h2>
            <img src="/images/icons/drop-down.svg" class="app-icon drop-down-icon ease-in duration-100" data-drop-down-allow-close="true">
          </div>
          <div class="overflow-hidden flex flex-col ease-in duration-100 hidden" data-drop-down="true" data-drop-down-allow-close="true">
            ${content || ""}
          </div>
        </div>
        <script type="module">
          import { setDropEvents } from '/js/drop-down.js'
          setDropEvents('${id}');
        </script>
      `
      }
    }
  })

  app.engine(
    'hbs', 
    engine,
  )

  useContainer(app.select(ValidationModule), {fallbackOnErrors: true})

  await app.listen(getEnv().APP_PORT);
}
bootstrap();
