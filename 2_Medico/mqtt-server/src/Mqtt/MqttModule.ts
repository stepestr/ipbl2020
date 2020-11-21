import { Module } from '@nestjs/common';
import { MqttController } from './MqttController';
import { MqttService } from './MqttService';
import { DatabaseModule } from '../Database/DatabaseModule';
import {
  EmergencyProviders,
  EmergencyRepository,
  EmergencyService,
} from 'src/Emergency';
import { SensorProviders, SensorRepository, SensorService } from 'src/Sensor';

@Module({
  imports: [DatabaseModule],
  controllers: [MqttController],
  providers: [
    MqttService,
    ...SensorProviders,
    SensorRepository,
    SensorService,
    ...EmergencyProviders,
    EmergencyRepository,
    EmergencyService,
  ],
})
export class MqttModule {}
