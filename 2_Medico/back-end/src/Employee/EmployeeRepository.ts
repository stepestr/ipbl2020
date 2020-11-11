import { Inject, Injectable } from '@nestjs/common';
import { Employee } from './Employee';
import { Repository } from 'typeorm';
import { EmployeeQuery } from './EmployeeQuery';
import { EmployeeQueryResult } from './EmployeeQueryResult';

@Injectable()
export class EmployeeRepository {
  constructor(@Inject('EMPLOYEE_REPOSITORY') private employeeRepository: Repository<Employee>) {}

  async index(queryParams: EmployeeQuery): Promise<EmployeeQueryResult> {
    const limit = queryParams.limit ? Number(queryParams.limit) : 10;
    const page = queryParams.page ? Number(queryParams.page) : 1;
    queryParams.limit ? Number(queryParams.limit) : 10;
    const query = this.employeeRepository.createQueryBuilder('employee');
    query.take(limit);
    query.skip((page - 1) * limit);
    queryParams.orderBy && query.orderBy(`employee.${queryParams.orderBy}`, queryParams.order);
    const employees = await query.getMany();
    const count = await query.getCount();
    const pagesAmmount = Math.ceil(count / queryParams.limit);
    const result: EmployeeQueryResult = {
      page,
      limit,
      count,
      pagesAmmount,
      employees,
    };
    return result;
  }

  async show(id: number): Promise<Employee> {
    return await this.employeeRepository.findOne({ idEmployee: id });
  }

  async store(data: Employee): Promise<Employee> {
    const employee: Employee = this.employeeRepository.create(data);
    return await this.employeeRepository.save(employee);
  }

  async update(id: number, data: Employee): Promise<Employee> {
    await this.employeeRepository.update({ idEmployee: id }, data);
    return this.show(id);
  }

  async delete(id: number) {
    const employee = await this.employeeRepository.find({ idEmployee: id });
    await this.employeeRepository.remove(employee);
  }
}