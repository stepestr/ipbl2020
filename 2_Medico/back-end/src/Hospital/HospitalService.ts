import { Injectable } from '@nestjs/common';
import { Hospital } from './Hospital';
import { HospitalQuery } from './HospitalQuery';
import { HospitalQueryResult } from './HospitalQueryResult';
import { HospitalRepository } from './HospitalRepository';

@Injectable()
export class HospitalService {
  constructor(private hospitalRepository: HospitalRepository) {}

  async index(queryParams: HospitalQuery): Promise<HospitalQueryResult> {
    return await this.hospitalRepository.index(queryParams);
  }

  async show(id: number): Promise<Hospital> {
    return await this.hospitalRepository.show(id);
  }

  async store(data: Hospital): Promise<Hospital> {
    return await this.hospitalRepository.store(data);
  }

  async update(id: number, data: Hospital): Promise<Hospital> {
    return await this.hospitalRepository.update(id, data);
  }

  async delete(id: number) {
    return await this.hospitalRepository.delete(id);
  }
}