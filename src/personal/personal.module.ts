import { MiddlewareConsumer, Module } from '@nestjs/common';
import PermissionRepository from 'src/knex/permission.repository';
import PersonalRepository from 'src/knex/personal.repository';
import CreatePersonalService from './services/createPersonal.service';
import { AlunoRepositoryI, PermissionRepositoryI, PersonalRepositoryI } from 'src/knex/repository';
import { PersonalController } from './personal.controller';
import { UserModule } from 'src/user/user.module';
import AttachAlunoService from './services/attachAluno.service';
import AlunoRepository from 'src/knex/aluno.repository';

@Module({
    imports:[UserModule],
    controllers:[PersonalController],
    providers:[
        {
            provide: PersonalRepositoryI,
            useClass: PersonalRepository
        },
        {
            provide: PermissionRepositoryI,
            useClass: PermissionRepository
        },
        {
            provide: AlunoRepositoryI,
            useClass: AlunoRepository
        },
        CreatePersonalService,
        AttachAlunoService
    ],
    exports:[]
})
export class PersonalModule {
    configure(consumer: MiddlewareConsumer) {
        
    }
    
} 