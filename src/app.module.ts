import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import KnexModule from './knex/knex.module';
import { ConfigModule } from '@nestjs/config';
import MusclesModule from './muscles/muscle.module';
import NotEmptyBodyMiddleware from './notEmptyBody.middleware';
import ErrorModule from './errors/error.module';
import DomainModule from './domain/domain.module';

@Module({
  imports: [
    UserModule, 
    KnexModule, 
    MusclesModule,
    ErrorModule,
    DomainModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [],
  providers: [AppService] 
})
export class AppModule {
  configure(consumer:MiddlewareConsumer){
    consumer.apply(NotEmptyBodyMiddleware).forRoutes(
      {path:"*", method: RequestMethod.POST},
      {path:"*", method: RequestMethod.PUT},
      {path:"*", method: RequestMethod.PATCH}
    )
  }
}
