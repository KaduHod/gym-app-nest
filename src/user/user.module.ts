import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnexModule } from 'src/knex/knex.module';
import UserRepository from 'src/knex/user.repository';
import { UserController } from './user.controller';

@Module({
    imports:[ConfigModule.forRoot(), KnexModule],
    controllers: [UserController],
    providers: [],
   
})
export class UserModule {}
