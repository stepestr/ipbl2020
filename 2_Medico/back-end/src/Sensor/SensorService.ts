import { Injectable } from '@nestjs/common';
import { Sensor } from './Sensor';
import { SensorQuery } from './SensorQuery';
import { SensorQueryResult } from './SensorQueryResult';
import { SensorRepository } from './SensorRepository';

@Injectable()
export class SensorService {
  constructor(private sensorRepository: SensorRepository) {}

  async index(queryParams: SensorQuery): Promise<SensorQueryResult> {
    return await this.sensorRepository.index(queryParams);
  }

  async show(id: string): Promise<Sensor> {
    return await this.sensorRepository.show(id);
  }

  async store(data: Sensor): Promise<Sensor> {
    return await this.sensorRepository.store(data);
  }

  async update(id: string, data: Sensor): Promise<Sensor> {
    return await this.sensorRepository.update(id, data);
  }

  async delete(id: string) {
    return await this.sensorRepository.delete(id);
  }
}
