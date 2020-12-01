import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database/DatabaseModule';
import { PersonController } from './PersonController';
import { PersonProviders } from './PersonProviders';
import { PersonRepository } from './PersonRepository';
import { PersonService } from './PersonService';
import { PersonResolver } from './PersonResolver';
import { QRCodeController } from './QRCodeController';

@Module({
  imports: [DatabaseModule],
  controllers: [PersonController, QRCodeController],
  providers: [
    PersonService,
    ...PersonProviders,
    PersonRepository,
    PersonResolver,
  ],
})
export class PersonModule {}
