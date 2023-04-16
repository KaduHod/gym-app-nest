import { DataSource } from 'typeorm';
import { User } from '../entitys/Users.entity';
import { Permissions } from 'src/entitys/Permissions.entity';
import { Personal } from 'src/entitys/Personais.entity';


export const personalProviders = [
  {
    provide: 'PERSONAL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Personal),
    inject: ['DATA_SOURCE'],
  },
  
];