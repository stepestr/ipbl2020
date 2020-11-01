import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { classToPlain } from 'class-transformer';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { Address } from 'src/Address/Address';
import { ApiProperty } from '@nestjs/swagger';

@Entity('person')
export class Person {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'per_id' })
  @IsEmpty()
  idPerson: number;

  @ApiProperty()
  @Column({ name: 'per_name' })
  @IsString()
  perName: string;

  @ApiProperty()
  @Column({ name: 'per_cpf' })
  @IsString()
  perCpf: number;

  @ApiProperty()
  @Column({ name: 'per_birth' })
  @IsString()
  perBirth: number;

  @ApiProperty()
  @OneToOne(() => Address, { onDelete: 'CASCADE' })
  @JoinColumn()
  @IsNotEmpty()
  idAddress: Address;

  toJSON() {
    return classToPlain(this);
  }
}
