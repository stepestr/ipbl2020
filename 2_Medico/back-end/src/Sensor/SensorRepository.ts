import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Sensor } from './Sensor';
import { SensorQuery } from './SensorQuery';
import { SensorQueryResult } from './SensorQueryResult';

@Injectable()
export class SensorRepository {
  constructor(@Inject('SENSOR_MODEL') private sensorRepository: Model<Sensor>) {}

  async index(queryParams: SensorQuery): Promise<SensorQueryResult> {
    const limit = queryParams.limit ? Number(queryParams.limit) : 10;
    const page = queryParams.page ? Number(queryParams.page) : 1;
    queryParams.limit ? Number(queryParams.limit) : 10;
    const sensors = await this.sensorRepository
      .find()
      .limit(limit)
      .skip((page - 1) * limit)
      .sort(queryParams.orderBy);
    const count = await this.sensorRepository.find().count();
    const pagesAmmount = Math.ceil(count / queryParams.limit);
    const result: SensorQueryResult = {
      page,
      limit,
      count,
      pagesAmmount,
      sensors,
    };
    return result;
  }

  async show(id: string): Promise<Sensor> {
    return await this.sensorRepository.findOne({ _id: id });
  }

  async store(data: Sensor): Promise<Sensor> {
    return await this.sensorRepository.create(data);
  }

  async update(id: string, data: Sensor): Promise<Sensor> {
    return await this.sensorRepository.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return await this.sensorRepository.findByIdAndRemove(id);
  }
}
