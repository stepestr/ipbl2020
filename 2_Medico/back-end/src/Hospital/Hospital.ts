import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { classToPlain } from 'class-transformer';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';
import { Address } from 'src/Address/Address';
import { Person } from 'src/Person/Person';
import { Contact } from 'src/Contact/Contact';
import { Employee } from 'src/Employee/Employee';
import { ApiProperty } from '@nestjs/swagger';

@Entity('hospital')
export class Hospital {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'hos_id' })
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  idHospital: number;

  @ApiProperty()
  @Column({ name: 'hos_cnpj' })
  @IsString({ message: 'campo hosCnpj inválido' })
  hosCnpj: string;

  @ApiProperty()
  @Column({ name: 'hos_cnes_code' })
  @IsString({ message: 'campo hosCnesCode inválido' })
  hosCnesCode: number;

  @ApiProperty()
  @Column({ name: 'hos_name' })
  @IsString({ message: 'campo hosName inválido' })
  hosName: string;

  @ApiProperty()
  @Column({ name: 'hos_corporate_name' })
  @IsString({ message: 'campo hosCorpName inválido' })
  hosCorpName: string;

  @ApiProperty({ type: Address })
  @OneToOne(() => Address, { onDelete: 'CASCADE' })
  @JoinColumn()
  @IsNotEmpty()
  idAddress: Address;

  @ApiProperty({ type: Contact })
  @ManyToMany(() => Contact, { onDelete: 'CASCADE' })
  @JoinTable()
  contacts: Contact[];

  @ApiProperty({ type: Employee })
  @ManyToMany(() => Contact, { onDelete: 'CASCADE' })
  @JoinTable()
  employees: Employee[];

  @ApiProperty({ type: Person })
  @ManyToMany(() => Contact, { onDelete: 'CASCADE' })
  @JoinTable()
  persons: Person[];

  toJSON() {
    return classToPlain(this);
  }
}
