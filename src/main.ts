import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import GlobalErrorHandler from './errors/GlobalError';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GlobalErrorHandler());
  await app.listen(3000);
}
bootstrap();
