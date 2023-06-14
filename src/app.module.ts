import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import NotEmptyBodyMiddleware from './notEmptyBody.middleware';
import ErrorModule from './errors/error.module';
import ExerciseModule from './modules/exercicios/exercise.module';
import PersonalModule from './modules/personal/personal.module';
import AlunoModule from './modules/aluno/aluno.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './data-source.config';
import ArticulationModule from './modules/articulation/articulation.module';
import MovementsModule from './modules/movements/movements.module';
import ValidationModule from './modules/validations/validation.module';
import { AppController } from './app.controller';
import MusclesModule from './modules/muscles/muscle.module';
import MedidasModule from './modules/medidas/medida.module';
import * as express from 'express';
import { join } from 'path';
import AuthGuard from './guards/auth.guard';
import AuthService from './modules/auth/auth.service';
import WorkoutModule from './modules/workouts/workout.module';
import ApiModule from './api/api.module';


@Module({
  imports: [
    MedidasModule,
    UserModule, 
    AlunoModule,
    ErrorModule,
    MusclesModule,
    ExerciseModule,
    PersonalModule,
    ArticulationModule,
    MovementsModule,
    ConfigModule.forRoot({
      isGlobal: true
    }), 
    TypeOrmModule.forRoot(config),
    ValidationModule,
    WorkoutModule,
    ApiModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  exports: [
    AuthGuard,
    AuthService
  ]
})
export class AppModule {
  configure(consumer:MiddlewareConsumer){
    consumer.apply(NotEmptyBodyMiddleware).forRoutes(
      {path:"*", method: RequestMethod.POST},
      {path:"*", method: RequestMethod.PUT},
      {path:"*", method: RequestMethod.PATCH}
    )
    .apply(
      express.static(
        join(__dirname, '..', 'public')
      )
    ).forRoutes("*")
  }
}
