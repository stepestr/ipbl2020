import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { classToPlain } from 'class-transformer';
import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity('address')
export class Address {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'add_id' })
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  idAddress: number;

  @ApiProperty()
  @Column({ name: 'add_street' })
  @IsString()
  @IsNotEmpty()
  addStreet: string;

  @ApiProperty()
  @Column({ name: 'add_number' })
  @IsNumber()
  addNumber: number;

  @ApiProperty()
  @Column({ name: 'add_city' })
  @IsString()
  addCity: string;

  @ApiProperty()
  @Column({ name: 'add_state' })
  @IsString()
  addState: string;

  @ApiProperty()
  @Column({ name: 'add_country' })
  @IsString()
  addCountry: string;

  @ApiProperty()
  @Column({ name: 'add_zip_code' })
  @IsString()
  addZipCode: string;

  toJSON() {
    return classToPlain(this);
  }
}
