import { Module } from '@nestjs/common';
import { HospitalController } from './HospitalController';
import { HospitalService } from './HospitalService';

@Module({
  controllers: [HospitalController],
  providers: [HospitalService]
})
export class HospitalModule {}
