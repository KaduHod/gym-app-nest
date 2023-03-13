import { Module } from '@nestjs/common';
import { KnexModule } from 'src/knex/knex.module';
import { PermissionRepository } from 'src/knex/permission.repository';
import PersonalRepository from 'src/knex/personal.repository';
import { CreatePersonalService } from './services/createPersonal.service';

@Module({
    imports:[KnexModule],
    controllers:[],
    providers:[PersonalRepository, PermissionRepository, CreatePersonalService],
    exports:[PersonalRepository, CreatePersonalService]
})
export class PersonalModule {} 