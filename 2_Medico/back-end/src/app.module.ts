import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './Address/AddressModule';
import { ContactModule } from './Contact/ContactModule';
import { HospitalModule } from './Hospital/HospitalModule';
import { EmployeeModule } from './Employee/EmployeeModule';
import { PersonModule } from './Person/PersonModule';
import { DatabaseService } from './Database/DatabaseService';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AddressModule,
    ContactModule,
    HospitalModule,
    EmployeeModule,
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
