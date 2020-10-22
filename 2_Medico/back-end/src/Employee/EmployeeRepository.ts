import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './Employee';

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectRepository(Employee) private repository: Repository<Employee>,
  ) {}

  async getAll(): Promise<Employee[]> {
    return await this.repository.find();
  }

  async getById(id: number): Promise<Employee> {
    return await this.repository.findOne({ where: { id } });
  }

  async newAddress(data: Employee): Promise<Employee> {
    const employee: Employee = this.repository.create(data);
    await this.repository.save(employee);
    return employee;
  }
}