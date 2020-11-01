import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospital } from './Hospital';
import { HospitalController } from './HospitalController';
import { HospitalService } from './HospitalService';

@Module({
  imports: [TypeOrmModule.forFeature([Hospital])],
  controllers: [HospitalController],
  providers: [HospitalService]
})
export class HospitalModule {}
