import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnexModule } from 'src/knex/knex.module';
import UserRepository from 'src/knex/user.repository';
import { UpdateUserService } from './services/updateUser.service';
import { UpdateUserMiddleware } from './updateUser.middleware';
import { UserController } from './user.controller';
import { ValidateUserQueryMiddleware } from './validateQuery.middleware';

@Module({
    imports:[ConfigModule, KnexModule],
    controllers: [UserController],
    providers: [UserRepository, UpdateUserService],
    exports:[UserRepository]
})
export class UserModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UpdateUserMiddleware).forRoutes(
            {path:'personal', method: RequestMethod.PUT},
            {path:'user', method: RequestMethod.PUT},
            {path:'aluno', method: RequestMethod.PUT},
        ).apply(ValidateUserQueryMiddleware).forRoutes(
            {path:'user', method: RequestMethod.GET}
        )
    }
}
