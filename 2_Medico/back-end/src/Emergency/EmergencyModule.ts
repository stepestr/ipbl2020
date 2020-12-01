import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database/DatabaseModule';
import { EmailController } from './EmailController';
import { EmailService } from './EmailService';
import { EmergencyController } from './EmergencyController';
import { EmergencyProviders } from './EmergencyProviders';
import { EmergencyRepository } from './EmergencyRepository';
import { EmergencyService } from './EmergencyService';

@Module({
  imports: [DatabaseModule],
  controllers: [EmergencyController, EmailController],
  providers: [
    EmergencyService,
    ...EmergencyProviders,
    EmergencyRepository,
    EmailService,
  ],
})
export class EmergencyModule {}
