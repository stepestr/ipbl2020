import { Module } from '@nestjs/common';
import { AddressController } from './AddressController';
import { AddressService } from './AddressService';

@Module({
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
