import { DataSource } from 'typeorm';
import { User } from '../domain/Users.entity';
import { Permissions } from 'src/domain/Permissions.entity';
import { Personal } from 'src/domain/Personais.entity';


export const personalProviders = [
  {
    provide: 'PERSONAL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Personal),
    inject: ['DATA_SOURCE'],
  },
  
];