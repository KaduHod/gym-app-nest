import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import NotEmptyBodyMiddleware from './notEmptyBody.middleware';
import MusclesModule from './muscles/muscle.module';
import ErrorModule from './errors/error.module';
import ExerciseModule from './exercicios/exercise.module';
import PersonalModule from './personal/personal.module';
import AlunoModule from './aluno/aluno.module';
import MedidaModule from './medidas/medida.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './data-source.config';

@Module({
  imports: [
    MedidaModule,
    UserModule, 
    AlunoModule,
    ErrorModule,
    MusclesModule,
    ExerciseModule,
    PersonalModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }), 
    TypeOrmModule.forRoot(config)
  ],
  controllers: [],
  providers: [
    AppService, 
  ] 
})
export class AppModule {
  configure(consumer:MiddlewareConsumer){
    consumer.apply(NotEmptyBodyMiddleware).forRoutes(
      {path:"*", method: RequestMethod.POST},
      {path:"*", method: RequestMethod.PUT},
      {path:"*", method: RequestMethod.PATCH}
    )
  }
}
