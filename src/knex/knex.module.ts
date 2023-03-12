import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnexRepository } from './knex.repository';

@Module({
    imports:[ConfigModule.forRoot()],
    providers:[KnexRepository]
})
export class KnexModule {}
