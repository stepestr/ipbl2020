import { Inject, Injectable } from '@nestjs/common';
import { Hospital } from './Hospital';
import { Repository } from 'typeorm';
import { HospitalQuery } from './HospitalQuery';
import { HospitalQueryResult } from './HospitalQueryResult';

@Injectable()
export class HospitalRepository {
  constructor(@Inject('HOSPITAL_REPOSITORY') private hospitalRepository: Repository<Hospital>) {}

  async index(queryParams: HospitalQuery): Promise<HospitalQueryResult> {
    const limit = queryParams.limit ? Number(queryParams.limit) : 10;
    const page = queryParams.page ? Number(queryParams.page) : 1;
    queryParams.limit ? Number(queryParams.limit) : 10;
    const query = this.hospitalRepository.createQueryBuilder('hospital');
    query.take(limit);
    query.skip((page - 1) * limit);
    queryParams.orderBy && query.orderBy(`hospital.${queryParams.orderBy}`, queryParams.order);
    const hospitals = await query.getMany();
    const count = await query.getCount();
    const pagesAmmount = Math.ceil(count / queryParams.limit);
    const result: HospitalQueryResult = {
      page,
      limit,
      count,
      pagesAmmount,
      hospitals,
    };
    return result;
  }

  async show(id: number): Promise<Hospital> {
    return await this.hospitalRepository.findOne({ idHospital: id });
  }

  async store(data: Hospital): Promise<Hospital> {
    const hospital: Hospital = this.hospitalRepository.create(data);
    return await this.hospitalRepository.save(hospital);
  }

  async update(id: number, data: Hospital): Promise<Hospital> {
    await this.hospitalRepository.update({ idHospital: id }, data);
    return this.show(id);
  }

  async delete(id: number) {
    const hospital = await this.hospitalRepository.find({ idHospital: id });
    await this.hospitalRepository.remove(hospital);
  }
}
