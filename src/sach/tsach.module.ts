import { Module } from '@nestjs/common';
import { TsachService } from './tsach.service';
import { TsachController } from './tsach.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sach} from './entities/tsach.entity';
import { NhaXuatBan } from 'src/nhaxuatban/entities/tnhaxuatban.entity';
import { TheLoai } from 'src/theloai/entities/ttheloai.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sach, NhaXuatBan, TheLoai])],
  controllers: [TsachController],
  providers: [TsachService],
  exports: [TypeOrmModule]
})
export class TsachModule {}
