import { Connection } from 'typeorm';
import { Hospital } from './Hospital';

export const HospitalProviders = [
  {
    provide: 'HOSPITAL_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Hospital),
    inject: ['MYSQL_CONNECTION'],
  },
];
