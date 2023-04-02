import { MiddlewareConsumer, Module } from '@nestjs/common';
import CreatePersonalService from './services/createPersonal.service';
import { PersonalController } from './personal.controller';
import { UserModule } from 'src/user/user.module';
import AttachAlunoService from './services/attachAluno.service';

@Module({
    imports:[UserModule],
    controllers:[PersonalController],
    providers:[
        CreatePersonalService,
        AttachAlunoService
    ],
    exports:[]
})
export default class PersonalModule {
    configure(consumer: MiddlewareConsumer) {
        
    }
} 