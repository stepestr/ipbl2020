import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { classToPlain } from 'class-transformer';
import { IsEmpty, IsString } from 'class-validator';

@Entity('person')
export class Person {
  @PrimaryGeneratedColumn({ name: 'per_id' })
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  idPerson: number;

  @Column({ name: 'per_name' })
  @IsString({ message: 'campo inválido' })
  perName: string;

  @Column({ name: 'per_cpf' })
  @IsString({ message: 'campo inválido' })
  perCpf: number;

  @Column({ name: 'per_birth' })
  @IsString({ message: 'campo inválido' })
  perBirth: number;

  @Column({ name: 'add_id' })
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  idAddress: number;

  toJSON() {
    return classToPlain(this);
  }
}