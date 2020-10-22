import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { classToPlain } from 'class-transformer';
import { IsEmpty, IsString } from 'class-validator';

@Entity('hospital')
export class Hospital {
  @PrimaryGeneratedColumn({ name: 'hos_id' })
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  idHospital: number;

  @Column({ name: 'hos_cnpj' })
  @IsString({ message: 'campo inválido' })
  hosCnpj: string;

  @Column({ name: 'hos_cnes_code' })
  @IsString({ message: 'campo inválido' })
  hosCnesCode: number;

  @Column({ name: 'hos_name' })
  @IsString({ message: 'campo inválido' })
  hosName: string;

  @Column({ name: 'hos_corporate_name' })
  @IsString({ message: 'campo inválido' })
  hosCorpName: string;

  @Column({ name: 'add_id' })
  @IsEmpty({ message: 'campo id não pode ser preenchido!' })
  idAddress: number;

  toJSON() {
    return classToPlain(this);
  }
}