import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { classToPlain } from 'class-transformer';
import { IsEmpty, IsString } from 'class-validator';

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn({ name: 'add_id' })
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  idAddress: number;

  @Column({ name: 'add_street' })
  @IsString({ message: 'campo inválido' })
  addStreet: string;

  @Column({ name: 'add_number' })
  @IsString({ message: 'campo inválido' })
  addNumber: number;

  @Column({ name: 'add_city' })
  @IsString({ message: 'campo inválido' })
  addCity: string;

  @Column({ name: 'add_state' })
  @IsString({ message: 'campo inválido' })
  addState: string;

  @Column({ name: 'add_country' })
  @IsString({ message: 'campo inválido' })
  addCountry: string;

  @Column({ name: 'add_zip_code' })
  @IsString({ message: 'campo inválido' })
  addZipCode: string;

  @Column({ name: 'employee_emp_id' })
  @IsString({ message: 'campo inválido' })
  idEmployee: number;

  @Column({ name: 'employee_add_id' })
  @IsString({ message: 'campo inválido' })
  idaddEmployee: number;

  @Column({ name: 'hospital_hos_id' })
  @IsString({ message: 'campo inválido' })
  idHospital: number;

  @Column({ name: 'hospital_add_id' })
  @IsString({ message: 'campo inválido' })
  idaddHospital: number;

  toJSON() {
    return classToPlain(this);
  }
}