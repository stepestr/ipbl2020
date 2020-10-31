import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  async index() {
    return 'index -> employee';
  }

  async show() {
    return 'show -> employee';
  }

  async store() {
    return 'store -> employee';
  }

  async update() {
    return 'update -> employee';
  }

  async delete() {
    return 'delete -> employee';
  }
}
