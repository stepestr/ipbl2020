import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmpty, IsString } from 'class-validator';
import { classToPlain } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Entity('contact')
export class Contact {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'con_id' })
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  idContact: number;

  @ApiProperty()
  @Column({ name: 'con_desc' })
  @IsString({ message: 'campo condesc inválido' })
  descContact: string;

  @ApiProperty()
  @Column({ name: 'con_type' })
  @IsString({ message: 'campo contype inválido' })
  typeContact: string;

  toJSON() {
    return classToPlain(this);
  }
}
