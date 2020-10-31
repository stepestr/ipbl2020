import { Injectable } from '@nestjs/common';

@Injectable()
export class HospitalService {
  async index() {
    return 'index -> hospital';
  }

  async show() {
    return 'show -> hospital';
  }

  async store() {
    return 'store -> hospital';
  }

  async update() {
    return 'update -> hospital';
  }

  async delete() {
    return 'delete -> hospital';
  }
}
