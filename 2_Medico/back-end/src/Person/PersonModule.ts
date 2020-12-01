import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database/DatabaseModule';
import { PersonController } from './PersonController';
import { PersonProviders } from './PersonProviders';
import { PersonRepository } from './PersonRepository';
import { PersonService } from './PersonService';
import { PersonResolver } from './PersonResolver';

@Module({
  imports: [DatabaseModule],
  controllers: [PersonController],
  providers: [
    PersonService,
    ...PersonProviders,
    PersonRepository,
    PersonResolver,
  ],
})
export class PersonModule {}
