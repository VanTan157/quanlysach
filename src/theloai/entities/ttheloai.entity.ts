import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('tTheLoai')
export class TheLoai {
  @PrimaryColumn()
  MaTheLoai: string;

  @Column({ nullable: true })
  TenTheLoai: string;
}
