import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './Address';

@Injectable()
export class AddressRepository {
  constructor(
    @InjectRepository(Address) private repository: Repository<Address>,
  ) {}

  async getAll(): Promise<Address[]> {
    return await this.repository.find();
  }

  async getById(id: number): Promise<Address> {
    return await this.repository.findOne({ where: { id } });
  }

  async newAddress(data: Address): Promise<Address> {
    const address: Address = this.repository.create(data);
    await this.repository.save(address);
    return address;
  }
}
