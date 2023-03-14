import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { KnexModule } from './knex/knex.module';
import { ConfigModule } from '@nestjs/config';
import { PersonalModule } from './personal/personal.module';
import { PersonalController } from './personal/personal.controller';
import { MuscleRepository } from './knex/muscleGroup.repository';

@Module({
  imports: [
    UserModule, 
    KnexModule, 
    PersonalModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [AppController, PersonalController],
  providers: [AppService, MuscleRepository],
})
export class AppModule {}
