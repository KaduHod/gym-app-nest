import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { KnexModule } from './knex/knex.module';

@Module({
  imports: [UserModule, KnexModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
