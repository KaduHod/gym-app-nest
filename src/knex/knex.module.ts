import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import knex, { Knex } from 'knex';
import { KnexRepository } from './knex.repository';

@Module({
    imports:[ConfigModule],
    providers:[
        KnexRepository,
        {
            provide: 'KnexConnection',
            useFactory: async (configService: ConfigService): Promise<Knex> => {
                return knex({
                    client: configService.get<string>('DATABASE_CLIENT'),
                    connection: {
                        host: configService.get<string>('DATABASE_HOST'),
                        port : configService.get<number>('DATABASE_PORT'),
                        user : configService.get<string>('DATABASE_USER'),
                        password : configService.get<string>('DATABASE_PWD'),
                        database : configService.get<string>('GYM_DATABASE_NAME')
                    },
                    debug: true,
                    pool: {
                      min: 2,
                      max: 10,
                    }, 
                })
            },
            inject: [ConfigService]
        }
    ]
})
export class KnexModule {}
