import { Module } from '@nestjs/common';
import { KnexModule } from 'src/knex/knex.module';
import { PermissionRepository } from 'src/knex/permission.repository';
import PersonalRepository from 'src/knex/personal.repository';
import UserRepository from 'src/knex/user.repository';
import { CreatePersonalService } from './services/createPersonal.service';

@Module({
    imports:[KnexModule],
    controllers:[],
    providers:[
        PersonalRepository, 
        UserRepository, 
        PermissionRepository, 
        CreatePersonalService
    ],
    exports:[
        UserRepository,
        PersonalRepository, 
        CreatePersonalService
    ]
})
export class PersonalModule {} 