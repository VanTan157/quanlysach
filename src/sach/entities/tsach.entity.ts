import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { NhaXuatBan } from 'src/nhaxuatban/entities/tnhaxuatban.entity'; 
import { TheLoai } from 'src/theloai/entities/ttheloai.entity'; 

@Entity('tSach')
export class Sach {
  @PrimaryColumn()
  MaSach: string;

  @Column({ nullable: true })
  TenSach: string;

  @Column({ nullable: true })
  TacGia: string;

  @ManyToOne(() => TheLoai, (theLoai) => theLoai.MaTheLoai)
  @JoinColumn({ name: 'MaTheLoai' })
  MaTheLoai: TheLoai;

  @ManyToOne(() => NhaXuatBan, (nhaXuatBan) => nhaXuatBan.MaNXB)
  @JoinColumn({ name: 'MaNXB' })
  MaNXB: NhaXuatBan;

  @Column({ type: 'decimal', nullable: true })
  DonGiaNhap: number;

  @Column({ type: 'decimal', nullable: true })
  DonGiaBan: number;

  @Column({ nullable: true })
  SoLuong: number;

  @Column({ nullable: true })
  SoTrang: number;

  @Column({ nullable: true })
  TrongLuong: string;

  @Column({ type: 'longblob', nullable: true })
  Anh: Buffer;
}
