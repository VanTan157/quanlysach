
import { IsString, IsInt, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';
import { NhaXuatBan } from 'src/nhaxuatban/entities/tnhaxuatban.entity';
import { TheLoai } from 'src/theloai/entities/ttheloai.entity';
import { DeepPartial } from 'typeorm';

export class CreateSachDto {
  @IsString()
  @IsNotEmpty()
  MaSach: string;

  @IsString()
  @IsOptional()
  TenSach: string;

  @IsString()
  @IsOptional()
  TacGia: string;

  @IsString()
  @IsOptional()
  MaTheLoai: DeepPartial<TheLoai>;

  @IsString()
  @IsOptional()
  MaNXB: DeepPartial<NhaXuatBan>;

  @IsNumber()
  @IsOptional()
  DonGiaNhap: number;

  @IsNumber()
  @IsOptional()
  DonGiaBan: number;

  @IsInt()
  @IsOptional()
  SoLuong: number;

  @IsInt()
  @IsOptional()
  SoTrang: number;

  @IsString()
  @IsOptional()
  TrongLuong: string;

  @IsOptional()
  Anh: Buffer;
}

