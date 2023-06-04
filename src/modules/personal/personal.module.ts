import { MiddlewareConsumer, Module } from '@nestjs/common';
import CreatePersonalService from './services/createPersonal.service';
import { PersonalController } from './personal.controller';
import { UserModule } from 'src/modules/user/user.module';
import AttachAlunoService from './services/attachAluno.service';
import {TypeOrmModule} from "@nestjs/typeorm"
import { Personal } from 'src/modules/personal/Personais.entity';
import { Aluno } from 'src/modules/aluno/Alunos.entity';
import { User } from '../user/Users.entity';

@Module({
    imports:[
        UserModule,
        TypeOrmModule.forFeature([Personal, Aluno, User])
    ],
    controllers:[PersonalController],
    providers:[
        CreatePersonalService,
        AttachAlunoService,
    ],
    exports:[]
})
export default class PersonalModule {
    configure(consumer: MiddlewareConsumer) {
        
    }
} 