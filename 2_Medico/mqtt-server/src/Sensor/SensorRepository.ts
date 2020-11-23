import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Sensor } from './Sensor';

@Injectable()
export class SensorRepository {
  constructor(
    @Inject('SENSOR_MODEL') private sensorRepository: Model<Sensor>,
  ) {}

  async save(data: Sensor) {
    await this.sensorRepository.create(data);
  }
}
