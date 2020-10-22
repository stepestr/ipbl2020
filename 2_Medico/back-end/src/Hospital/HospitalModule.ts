import { Module } from '@nestjs/common';
import { Hospital } from './Hospital';
import { HostipalController } from './HospitalController';
import { HospitalRepository } from './HospitalRepository';
import { HospitalService } from './HospitalService';
@Module({
  controllers: [HostipalController],
  providers: [HospitalService, HospitalRepository],
  exports: [HospitalService],
})
export class HospitalModule {}

