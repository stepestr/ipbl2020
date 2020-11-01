import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './Address';
import { AddressQuery } from './AddressQuery';
import { AddressQueryResult } from './AddressQueryResult';

@Injectable()
export class AddressService {
  constructor(@InjectRepository(Address) private addressRepository: Repository<Address>) {}

  async index(queryParams: AddressQuery): Promise<AddressQueryResult> {
    const limit = queryParams.limit ? Number(queryParams.limit) : 10;
    const page = queryParams.page ? Number(queryParams.page) : 1;
    queryParams.limit ? Number(queryParams.limit) : 10;
    const query = this.addressRepository.createQueryBuilder('address');
    query.take(limit);
    query.skip((page - 1) * limit);
    queryParams.orderBy && query.orderBy(`address.${queryParams.orderBy}`, queryParams.order);
    const addresses = await query.getMany();
    const count = await query.getCount();
    const pagesAmmount = Math.ceil(count / queryParams.limit);
    const result: AddressQueryResult = {
      page,
      limit,
      count,
      pagesAmmount,
      addresses,
    };
    return result;
  }

  async show(id: number): Promise<Address> {
    return await this.addressRepository.findOne({ idAddress: id });
  }

  async store(data: Address): Promise<Address> {
    const address: Address = this.addressRepository.create(data);
    return await this.addressRepository.save(address);
  }

  async update(id: number, data: Address): Promise<Address> {
    await this.addressRepository.update({ idAddress: id }, data);
    return this.show(id);
  }

  async delete(id: number) {
    const address = await this.addressRepository.find({ idAddress: id });
    await this.addressRepository.remove(address);
  }
}
