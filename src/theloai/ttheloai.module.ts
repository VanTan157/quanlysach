import { Module } from '@nestjs/common';
import { TtheloaiService } from './ttheloai.service';
import { TtheloaiController } from './ttheloai.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TheLoai } from './entities/ttheloai.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TheLoai])],
  controllers: [TtheloaiController],
  providers: [TtheloaiService],
})
export class TtheloaiModule {}
