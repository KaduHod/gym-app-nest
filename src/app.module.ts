import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import KnexModule from './knex/knex.module';
import { ConfigModule } from '@nestjs/config';
import { PersonalModule } from './personal/personal.module';
import { PersonalController } from './personal/personal.controller';
import MuscleController from './muscles/muscle.controller';
import MusclesModule from './muscles/muscle.module';
import AlunoModule from './aluno/aluno.module';
import AlunoController from './aluno/aluno.controller';

@Module({
  imports: [
    UserModule, 
    KnexModule, 
    MusclesModule,
    PersonalModule,
    AlunoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [
    AppController, 
    PersonalController,
    AlunoController,
    MuscleController
  ],
  providers: [AppService],
})
export class AppModule {}
