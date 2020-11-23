import { createConnection } from 'typeorm';
import * as mongoose from 'mongoose';
import { Address } from '../Address/Address';
import { Contact } from '../Contact/Contact';
import { Employee } from '../Employee/Employee';
import { Hospital } from '../Hospital/Hospital';
import { Person } from '../Person/Person';

export const databaseProviders = [
  {
    provide: 'MONGODB_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
  },
  {
    provide: 'MYSQL_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.MYSQL_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        //synchronize: true,
        dropSchema: false,
        entities: [Address, Contact, Employee, Hospital, Person],
      }),
  },
];
