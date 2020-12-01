import { Module } from '@nestjs/common';
import { ContactModule } from './Contact/ContactModule';
import { PersonModule } from './Person/PersonModule';
import { HospitalModule } from './Hospital/HospitalModule';
import { AddressModule } from './Address/AddressModule';
import { EmployeeModule } from './Employee/EmployeeModule';
import { EmergencyModule } from './Emergency/EmergencyModule';
import { SensorModule } from './Sensor/SensorModule';
import { GraphQLModule } from '@nestjs/graphql';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    MailerModule.forRoot({
      transport: `smtp://${process.env.MAIL_USER}:${process.env.MAIL_PASS}@${process.env.MAIL_HOST}`,
      defaults: {
        from: 'STEPES-TR <stepestr2020@gmail.com>',
      },
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
