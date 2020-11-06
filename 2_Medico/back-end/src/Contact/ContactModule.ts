import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/Database/DatabaseModule';
import { Contact } from './Contact';
import { ContactController } from './ContactController';
import { ContactProviders } from './ContactProviders';
import { ContactRepository } from './ContactRepository';
import { ContactService } from './ContactService';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactController],
  providers: [ContactService, ...ContactProviders, ContactRepository],
})
export class ContactModule {}
