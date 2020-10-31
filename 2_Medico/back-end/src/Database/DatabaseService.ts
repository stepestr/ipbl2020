import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Contact } from 'src/Contact/Contact';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'default',
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      //synchronize: true,
      dropSchema: false,
      //logging: true,
      entities: [Contact],
      //entities: ['dist/**/*.entity.js'],
    };
  }
}
