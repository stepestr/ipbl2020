import { Connection } from 'typeorm';
import { Person } from './Person';

export const PersonProviders = [
  {
    provide: 'PERSON_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Person),
    inject: ['MYSQL_CONNECTION'],
  },
];