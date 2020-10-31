import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmpty, IsString } from 'class-validator';
import { classToPlain } from 'class-transformer';

@Entity('contact')
export class Contact {
  @PrimaryGeneratedColumn({ name: 'con_id' })
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  idContact: number;

  @Column({ name: 'con_desc' })
  @IsString({ message: 'campo inválido' })
  descContact: string;

  @Column({ name: 'con_type' })
  @IsString({ message: 'campo inválido' })
  typeContact: string;

  toJSON() {
    return classToPlain(this);
  }
}
