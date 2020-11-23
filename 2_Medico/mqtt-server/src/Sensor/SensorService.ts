import { Injectable } from '@nestjs/common';
import { Sensor } from './Sensor';
import { SensorRepository } from './SensorRepository';

@Injectable()
export class SensorService {
  constructor(private sensorRepository: SensorRepository) {}

  async save(data: Sensor) {
    await this.sensorRepository.save(data);
  }
}
