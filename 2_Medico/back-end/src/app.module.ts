import { Module } from '@nestjs/common';
import { ContactModule } from './Contact/ContactModule';
import { PersonModule } from './Person/PersonModule';
import { HospitalModule } from './Hospital/HospitalModule';
import { AddressModule } from './Address/AddressModule';
import { EmployeeModule } from './Employee/EmployeeModule';
import { EmergencyModule } from './Emergency/EmergencyModule';
import { SensorModule } from './Sensor/SensorModule';

@Module({
  imports: [ContactModule, PersonModule, HospitalModule, AddressModule, EmployeeModule, EmergencyModule, SensorModule],
  providers: [],
})
export class AppModule {}
