import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database/DatabaseModule';
import { Hospital } from './Hospital';
import { HospitalController } from './HospitalController';
import { HospitalProviders } from './HospitalProviders';
import { HospitalRepository } from './HospitalRepository';
import { HospitalService } from './HospitalService';

@Module({
  imports: [DatabaseModule],
  controllers: [HospitalController],
  providers: [HospitalService, ...HospitalProviders, HospitalRepository],
})
export class HospitalModule {}
