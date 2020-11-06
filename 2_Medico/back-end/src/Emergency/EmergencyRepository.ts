import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Emergency } from './Emergency';

@Injectable()
export class EmergencyRepository {
  constructor(@Inject('EMERGENCY_MODEL') private emergencyRepository: Model<Emergency>) {}

  async index(): Promise<Emergency[]> {
    return await this.emergencyRepository.find();
  }

  async show(id: string): Promise<Emergency> {
    return await this.emergencyRepository.findOne({ _id: id });
  }

  async store(data: Emergency): Promise<Emergency> {
    return await this.emergencyRepository.create(data);
  }

  async update(id: string, data: Emergency): Promise<Emergency> {
    return await this.emergencyRepository.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return await this.emergencyRepository.findByIdAndRemove(id);
  }
}
