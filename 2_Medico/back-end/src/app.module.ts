import { Module } from '@nestjs/common';
import { ContactModule } from './Contact/ContactModule';
import { PersonModule } from './Person/PersonModule';
import { HospitalModule } from './Hospital/HospitalModule';
import { AddressModule } from './Address/AddressModule';
import { EmployeeModule } from './Employee/EmployeeModule';
import { EmergencyModule } from './Emergency/EmergencyModule';
import { SensorModule } from './Sensor/SensorModule';
import { GraphQLModule } from '@nestjs/graphql';
import { resolve } from 'path';
import { ContactRepository } from 'src/Contact/ContactRepository';
import { ContactResolver } from './Contact/ContactResolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    ContactModule,
    PersonModule,
    HospitalModule,
    AddressModule,
    EmployeeModule,
    EmergencyModule,
    SensorModule,
  ],
  providers: [],
})
export class AppModule {}
