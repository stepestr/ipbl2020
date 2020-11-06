import { Connection } from 'typeorm';
import { Employee } from './Employee';

export const EmployeeProviders = [
  {
    provide: 'EMPLOYEE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Employee),
    inject: ['MYSQL_CONNECTION'],
  },
];