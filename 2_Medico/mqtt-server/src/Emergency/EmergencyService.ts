import { Injectable } from '@nestjs/common';
import { Emergency } from './Emergency';
import { EmergencyRepository } from './EmergencyRepository';

@Injectable()
export class EmergencyService {
  constructor(private emergencyRepository: EmergencyRepository) {}

  async save(data: Emergency) {
    await this.emergencyRepository.save(data);
  }
}
