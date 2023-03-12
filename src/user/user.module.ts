import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnexModule } from 'src/knex/knex.module';
import UserRepository from 'src/knex/user.repository';
import { UserController } from './user.controller';

@Module({
    imports:[KnexModule, ConfigModule.forRoot()],
    controllers: [UserController],
    providers: [UserRepository]
})
export class UserModule {}
