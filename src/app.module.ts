import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
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
import NotEmptyBodyMiddleware from './notEmptyBody.middleware';
import CrateUserMiddleware from './user/createUser.middleware';
import CreatePersonalService from './personal/services/createPersonal.service';
import ValidateUserDtoService from './user/services/validateUserDto.service';

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
    // AlunoController,
    MuscleController
  ],
  providers: [
    AppService, 
    CreatePersonalService, 
    ValidateUserDtoService,
    
  ],
})
export class AppModule {
  configure(consumer:MiddlewareConsumer){
    consumer.apply(NotEmptyBodyMiddleware).forRoutes(
      {path:"*", method: RequestMethod.POST},
      {path:"*", method: RequestMethod.PUT},
      {path:"*", method: RequestMethod.PATCH}
    ).apply(CrateUserMiddleware).forRoutes(
      {path:"aluno", method: RequestMethod.POST},
      {path:"personal", method: RequestMethod.POST},
      {path:"user", method: RequestMethod.POST}
    )
  }
}
