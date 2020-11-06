import { Injectable } from '@nestjs/common';
import { Employee } from './Employee';
import { EmployeeQuery } from './EmployeeQuery';
import { EmployeeQueryResult } from './EmployeeQueryResult';
import { EmployeeRepository } from './EmployeeRepository';

@Injectable()
export class EmployeeService {
  constructor(private employeeRepository: EmployeeRepository) {}

  async index(queryParams: EmployeeQuery): Promise<EmployeeQueryResult> {
    return await this.employeeRepository.index(queryParams);
  }

  async show(id: number): Promise<Employee> {
    return await this.employeeRepository.show(id);
  }

  async store(data: Employee): Promise<Employee> {
    return await this.employeeRepository.store(data);
  }

  async update(id: number, data: Employee): Promise<Employee> {
    return await this.employeeRepository.update(id, data);
  }

  async delete(id: number) {
    return await this.employeeRepository.delete(id);
  }
}
