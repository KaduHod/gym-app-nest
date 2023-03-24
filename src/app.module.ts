import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import MusclesModule from './muscles/muscle.module';
import NotEmptyBodyMiddleware from './notEmptyBody.middleware';
import ErrorModule from './errors/error.module';
import DomainModule from './domain/domain.module';
import ExerciseModule from './exercicios/exercise.module';
import { PersonalModule } from './personal/personal.module';
import AlunoModule from './aluno/aluno.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    UserModule, 
    AlunoModule,
    ErrorModule,
    DomainModule,
    MusclesModule,
    ExerciseModule,
    PersonalModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [],
  providers: [
    AppService, 
    PrismaService
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
