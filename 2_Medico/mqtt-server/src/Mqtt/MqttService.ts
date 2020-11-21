import { Injectable } from '@nestjs/common';
import { Emergency, EmergencyService } from 'src/Emergency';
import { Sensor, SensorService } from 'src/Sensor';

@Injectable()
export class MqttService {
  constructor(
    private emergencyService: EmergencyService,
    private sensorService: SensorService,
  ) {}

  async saveSensor(sensor: Sensor) {
    await this.sensorService.save(sensor);
  }

  async saveEmergency(emergency: Emergency) {
    await this.emergencyService.save(emergency);
  }

  emergencyValidation(emergency: Emergency) {
    if (
      emergency.hasOwnProperty('idHospital') &&
      emergency.hasOwnProperty('dateTime') &&
      emergency.hasOwnProperty('serialNumber') &&
      emergency.hasOwnProperty('message') &&
      emergency.hasOwnProperty('auto') &&
      emergency.hasOwnProperty('sensor')
    ) {
      return true;
    }
    return false;
  }

  sensorValidation(sensor: Sensor) {
    if (
      sensor.hasOwnProperty('idHospital') &&
      sensor.hasOwnProperty('dateTime') &&
      sensor.hasOwnProperty('inclination') &&
      sensor.hasOwnProperty('velocity') &&
      sensor.hasOwnProperty('temperature') &&
      sensor.hasOwnProperty('movement') &&
      sensor.hasOwnProperty('saturation') &&
      sensor.hasOwnProperty('fall') &&
      sensor.hasOwnProperty('latitude') &&
      sensor.hasOwnProperty('longitude') &&
      sensor.hasOwnProperty('frequency') &&
      sensor.hasOwnProperty('obstacle')
    ) {
      return true;
    }
    return false;
  }
}
