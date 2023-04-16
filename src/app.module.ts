import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
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
import { config } from './typeOrm.config';
import { join } from 'path';
import { User } from './entitys/Users.entity';
import { Personal } from './entitys/Personais.entity';
import { Aluno } from './entitys/Alunos.entity';
import { Permissions } from './entitys/Permissions.entity';
import { UsersPermission } from './entitys/UsersPermission.entity';
import { Medidas } from './entitys/Medidas.entity';
import { Circunferencias } from './entitys/Circunferencias.entity';
import { Dobrascutaneas } from './entitys/Dobrascutaneas.entity';

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
