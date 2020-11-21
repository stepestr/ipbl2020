import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database/DatabaseModule';
import { ContactController } from './ContactController';
import { ContactProviders } from './ContactProviders';
import { ContactRepository } from './ContactRepository';
import { ContactResolver } from './ContactResolver';
import { ContactService } from './ContactService';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactController],
  providers: [
    ContactService,
    ...ContactProviders,
    ContactRepository,
    ContactResolver,
  ],
})
export class ContactModule {}
