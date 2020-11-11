import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/Database/DatabaseModule';
import { EmergencyController } from './EmergencyController';
import { EmergencyProviders } from './EmergencyProviders';
import { EmergencyRepository } from './EmergencyRepository';
import { EmergencyService } from './EmergencyService';

@Module({
  imports: [DatabaseModule],
  controllers: [EmergencyController],
  providers: [EmergencyService, ...EmergencyProviders, EmergencyRepository],
})
export class EmergencyModule {}
