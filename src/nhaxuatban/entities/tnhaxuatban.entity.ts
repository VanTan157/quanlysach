import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('tNhaXuatBan')
export class NhaXuatBan {
  @PrimaryColumn()
  MaNXB: string;

  @Column({ nullable: true })
  TenNXB: string;
}