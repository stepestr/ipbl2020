import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { classToPlain } from 'class-transformer';
import { IsEmpty, IsString } from 'class-validator';

@Entity('employee')
export class Employee {
  @PrimaryGeneratedColumn({ name: 'emp_id' })
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  idEmployee: number;

  @Column({ name: 'emp_name' })
  @IsString({ message: 'campo inválido' })
  empName: string;

  @Column({ name: 'emp_cns_code' })
  @IsString({ message: 'campo inválido' })
  empCode: number;

  @Column({ name: 'emp_occupation' })
  @IsString({ message: 'campo inválido' })
  empOccupation: string;

  @Column({ name: 'add_street' })
  @IsString({ message: 'campo inválido' })
  addStreet: number;

  toJSON() {
    return classToPlain(this);
  }
}