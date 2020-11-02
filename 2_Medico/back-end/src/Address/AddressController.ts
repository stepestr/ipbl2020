import { Body, Controller, Delete, Get, Param, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { AddressService } from './AddressService';
import { Address } from './Address';
import { AddressQuery } from './AddressQuery';
import { AddressQueryResult } from './AddressQueryResult';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @ApiOkResponse({
    description: "Address's Listing",
    type: AddressQueryResult,
  })
  @Get()
  async index(@Query(ValidationPipe) queryParams: AddressQuery): Promise<AddressQueryResult> {
    return await this.addressService.index(queryParams);
  }

  @ApiOkResponse({
    description: "Address' Details",
    type: Address,
  })
  @Get(':id')
  async show(@Param('id') id: number): Promise<Address> {
    return await this.addressService.show(id);
  }

  @ApiCreatedResponse({
    description: 'Address created',
    type: Address,
  })
  @Post()
  async store(@Body(ValidationPipe) data: Address): Promise<Address> {
    return await this.addressService.store(data);
  }

  @ApiOkResponse({
    description: 'Address Updated',
    type: Address,
  })
  @Put(':id')
  async update(@Param('id') id: number, @Body(ValidationPipe) data: Address): Promise<Address> {
    return await this.addressService.update(id, data);
  }

  @ApiOkResponse({
    description: 'Address deleted',
  })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.addressService.delete(id);
  }
}
