import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {
  async index() {
    return 'index -> person';
  }

  async show() {
    return 'show -> person';
  }

  async store() {
    return 'store -> person';
  }

  async update() {
    return 'update -> person';
  }

  async delete() {
    return 'delete -> person';
  }
}
