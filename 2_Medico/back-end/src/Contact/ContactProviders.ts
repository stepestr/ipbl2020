import { Connection } from 'typeorm';
import { Contact } from './Contact';

export const ContactProviders = [
  {
    provide: 'CONTACT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Contact),
    inject: ['MYSQL_CONNECTION'],
  },
];