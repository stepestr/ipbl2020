import { Module } from '@nestjs/common';
import { Contact } from './Contact';
import { ContactController } from './ContactController';
import { ContactRepository } from './ContactRepository';
import { ContactService } from './ContactService';
@Module({
  controllers: [ContactController],
  providers: [ContactService, ContactRepository],
  exports: [ContactService],
})
export class ContactModule {}