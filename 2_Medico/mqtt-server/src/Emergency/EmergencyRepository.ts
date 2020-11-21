import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Emergency } from './Emergency';

@Injectable()
export class EmergencyRepository {
  constructor(
    @Inject('EMERGENCY_MODEL') private emergencyRepository: Model<Emergency>,
  ) {}
  async save(data: Emergency) {
    return await this.emergencyRepository.create(data);
  }
}
