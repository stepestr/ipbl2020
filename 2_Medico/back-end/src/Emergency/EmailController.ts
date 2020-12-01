import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EmailService } from './EmailService';

@ApiTags('Email')
@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @ApiOkResponse({
    description: 'Emergency Detail',
  })
  @Get()
  async index(@Query() message: EmailContent) {
    return this.emailService.send(message.email, message.message);
  }
}

export interface EmailContent {
  email: string;
  message: string;
}
