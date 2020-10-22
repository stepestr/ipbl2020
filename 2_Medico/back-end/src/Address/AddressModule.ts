import { Module } from '@nestjs/common';
import { Address } from './Address';
import { AddressController } from './AddressController';
import { AddressRepository } from './AddressRepository';
import { AddressService } from './AddressService';
@Module({
  controllers: [AddressController],
  providers: [AddressService, AddressRepository],
  exports: [AddressService],
})
export class AddressModule {}
