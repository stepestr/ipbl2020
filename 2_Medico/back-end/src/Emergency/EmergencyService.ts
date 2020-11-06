import { Injectable } from '@nestjs/common';
import { Emergency } from './Emergency';
import { EmergencyRepository } from './EmergencyRepository';

@Injectable()
export class EmergencyService {
  constructor(private emergencyRepository: EmergencyRepository) {}

  async index(): Promise<Emergency[]> {
    return await this.emergencyRepository.index();
  }

  async show(id: string): Promise<Emergency> {
    return await this.emergencyRepository.show(id);
  }

  async store(data: Emergency): Promise<Emergency> {
    return await this.emergencyRepository.store(data);
  }

  async update(id: string, data: Emergency): Promise<Emergency> {
    return await this.emergencyRepository.update(id, data);
  }

  async delete(id: string) {
    return await this.emergencyRepository.delete(id);
  }
}
