import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { AddressService } from './AddressService';
import { Address } from './Address';

@Controller('address')
export class AddressController {}
