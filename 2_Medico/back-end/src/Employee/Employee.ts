import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { classToPlain } from 'class-transformer';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { Address } from 'src/address/Address';
import { Contact } from 'src/Contact/Contact';
import { ApiProperty } from '@nestjs/swagger';

@Entity('employee')
export class Employee {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'emp_id' })
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  idEmployee: number;

  @ApiProperty()
  @Column({ name: 'emp_name' })
  @IsString({ message: 'campo empName inválido' })
  empName: string;

  @ApiProperty()
  @Column({ name: 'emp_cns_code' })
  @IsString({ message: 'campo empCode inválido' })
  empCode: number;

  @ApiProperty()
  @Column({ name: 'emp_occupation' })
  @IsString({ message: 'campo empOccupation inválido' })
  empOccupation: string;

  @ApiProperty()
  @OneToOne(() => Address, { onDelete: 'CASCADE' })
  @IsNotEmpty()
  @JoinColumn()
  idAddress: Address;

  @ApiProperty()
  @ManyToMany(() => Contact, { onDelete: 'CASCADE' })
  @JoinTable()
  contacts: Contact[];

  toJSON() {
    return classToPlain(this);
  }
}
