import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hospital } from './Hospital';

@Injectable()
export class HospitalRepository {
  constructor(
    @InjectRepository(Hospital) private repository: Repository<Hospital>,
  ) {}

  async getAll(): Promise<Hospital[]> {
    return await this.repository.find();
  }

  async getById(id: number): Promise<Hospital> {
    return await this.repository.findOne({ where: { id } });
  }

  async newAddress(data: Hospital): Promise<Hospital> {
    const hospital: Hospital = this.repository.create(data);
    await this.repository.save(hospital);
    return hospital;
  }
}