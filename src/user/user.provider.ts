import { DataSource } from 'typeorm';
import { User } from '../domain/Users';
import { UsersPermission } from 'src/domain/UsersPermission';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'USERS_PERMISSION_REPOSIOTRY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UsersPermission),
    inject: ['DATA_SOURCE'],
  },
];