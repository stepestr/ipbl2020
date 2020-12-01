import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';
import { Emergency } from 'src/Emergency';
import { Sensor } from 'src/Sensor';
import { MqttService } from './MqttService';

@Controller()
export class MqttController {
  constructor(private readonly mqttService: MqttService) {}

  @MessagePattern('sensors')
  async getSensor(@Payload() data: Sensor, @Ctx() context: MqttContext) {
    if (this.mqttService.sensorValidation(data)) {
      await this.mqttService.saveSensor(data);
    }
  }

  @EventPattern('emergencies')
  async getEmergency(@Payload() data: Emergency, @Ctx() context: MqttContext) {
    //if (this.mqttService.emergencyValidation(data)) {
    await this.mqttService.saveEmergency(data);
    //}
  }
}
