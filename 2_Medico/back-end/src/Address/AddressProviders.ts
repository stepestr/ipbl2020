import { Connection } from 'typeorm';
import { Address } from './Address';

export const AddressProviders = [
  {
    provide: 'ADDRESS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Address),
    inject: ['MYSQL_CONNECTION'],
  },
];
