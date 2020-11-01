import { Body, Controller, Delete, Get, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { AddressService } from './AddressService';
import { Address } from './Address';
import { AddressQuery } from './AddressQuery';
import { AddressQueryResult } from './AddressQueryResult';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get()
  async index(@Query(ValidationPipe) queryParams: AddressQuery): Promise<AddressQueryResult> {
    return await this.addressService.index(queryParams);
  }

  @Get(':id')
  async show(@Param('id') id: number): Promise<Address> {
    return await this.addressService.show(id);
  }

  @Post()
  async store(@Body(ValidationPipe) data: Address): Promise<Address> {
    return await this.addressService.store(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body(ValidationPipe) data: Address): Promise<Address> {
    return await this.addressService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.addressService.delete(id);
  }
}
