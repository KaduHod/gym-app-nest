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
import { join } from 'path';
import { User } from './domain/Users.entity';
import { Personal } from './domain/Personais.entity';
import { Aluno } from './domain/Alunos.entity';
import { Permissions } from './domain/Permissions.entity';
import { UsersPermission } from './domain/UsersPermission.entity';
import { Medidas } from './domain/Medidas.entity';
import { Circunferencias } from './domain/Circunferencias.entity';
import { Dobrascutaneas } from './domain/Dobrascutaneas.entity';

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
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "localhost",
      port: 3306,
      username: "root",
      password: "123456",
      database: "gymapp2",
      // entities: [
        // User,
        // Personal,
        // Aluno,
        // Permissions,
        // UsersPermission,
        // Medidas,
        // Circunferencias,
        // Dobrascutaneas
      // ],
      migrations: [join(__dirname, 'dist/migratios/{*.js}')],
      // migrationsRun: true,
      // synchronize: false,
      entities: [
          join(__dirname, 'dist/**/*.entity.js')
      ],
      // migrations:[
          // join(__dirname, '/typeorm/migratios/{.ts,*.js}')
      // ],
      migrationsRun: true,
      synchronize: false,
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
