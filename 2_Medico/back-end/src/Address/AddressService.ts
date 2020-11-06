import { Injectable } from '@nestjs/common';
import { Address } from './Address';
import { AddressQuery } from './AddressQuery';
import { AddressQueryResult } from './AddressQueryResult';
import { AddressRepository } from './AddressRepository';

@Injectable()
export class AddressService {
  constructor(private addressRepository: AddressRepository) {}

  async index(queryParams: AddressQuery): Promise<AddressQueryResult> {
    return await this.addressRepository.index(queryParams);
  }

  async show(id: number): Promise<Address> {
    return await this.addressRepository.show(id);
  }

  async store(data: Address): Promise<Address> {
    return await this.addressRepository.store(data);
  }

  async update(id: number, data: Address): Promise<Address> {
    return await this.addressRepository.update(id, data);
  }

  async delete(id: number) {
    return await this.addressRepository.delete(id);
  }
}
