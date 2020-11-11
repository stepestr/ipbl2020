import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Address } from 'src/Address/Address';
import { Contact } from 'src/Contact/Contact';
import { Employee } from 'src/Employee/Employee';
import { Hospital } from 'src/Hospital/Hospital';
import { Person } from 'src/Person/Person';

@Injectable()
export class RelationalService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'RelationalService',
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      dropSchema: false,
      entities: [Address, Contact, Employee, Hospital, Person],
    };
  }
}
