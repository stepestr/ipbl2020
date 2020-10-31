import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressService {
  async index() {
    return 'index -> address';
  }

  async show() {
    return 'show -> address';
  }

  async store() {
    return 'store -> address';
  }

  async update() {
    return 'update -> address';
  }

  async delete() {
    return 'delete -> address';
  }
}
