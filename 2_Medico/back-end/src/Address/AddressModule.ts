import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database/DatabaseModule';
import { AddressController } from './AddressController';
import { AddressProviders } from './AddressProviders';
import { AddressRepository } from './AddressRepository';
import { AddressService } from './AddressService';

@Module({
  imports: [DatabaseModule],
  controllers: [AddressController],
  providers: [AddressService, ...AddressProviders, AddressRepository],
})
export class AddressModule {}
