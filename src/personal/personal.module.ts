import { MiddlewareConsumer, Module } from '@nestjs/common';
import CreatePersonalService from './services/createPersonal.service';
import { PersonalController } from './personal.controller';
import { UserModule } from 'src/user/user.module';
import AttachAlunoService from './services/attachAluno.service';
import TypeOrmModule from 'src/typeorm/typeorm.module';
import { personalProviders } from './personal.providers';

@Module({
    imports:[
        UserModule,
        TypeOrmModule
    ],
    controllers:[PersonalController],
    providers:[
        CreatePersonalService,
        AttachAlunoService,
        ...personalProviders
    ],
    exports:[]
})
export default class PersonalModule {
    configure(consumer: MiddlewareConsumer) {
        
    }
} 