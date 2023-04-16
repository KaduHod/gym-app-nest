import { DataSource } from 'typeorm';
import { User } from '../domain/Users';
import { Permissions } from 'src/domain/Permissions';
import { Personal } from 'src/domain/Personais';


export const personalProviders = [
  {
    provide: 'PERSONAL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Personal),
    inject: ['DATA_SOURCE'],
  },
  
];