import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AddressService } from './AddressService';

@Controller()
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Get()
  async getAddress() {}

  @Get(':id')
  async getAddressById() {}

  @Post()
  async newAddress() {}

  @Put(':id')
  async updateAddress() {}

  @Delete(':id')
  async deleteAddress() {}
}
