import { Module } from '@nestjs/common';
import PermissionRepository from 'src/knex/permission.repository';
import PersonalRepository from 'src/knex/personal.repository';
import CreatePersonalService from './services/createPersonal.service';
import { PermissionRepositoryI, PersonalRepositoryI } from 'src/knex/repository';
import { PersonalController } from './personal.controller';
import { UserModule } from 'src/user/user.module';

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
        CreatePersonalService,
    ],
    exports:[]
})
export class PersonalModule {} 