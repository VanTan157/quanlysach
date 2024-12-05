import { Module } from '@nestjs/common';
import { TnhaxuatbanService } from './tnhaxuatban.service';
import { TnhaxuatbanController } from './tnhaxuatban.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NhaXuatBan } from './entities/tnhaxuatban.entity';



@Module({
  imports: [TypeOrmModule.forFeature([NhaXuatBan])],
  controllers: [TnhaxuatbanController],
  providers: [TnhaxuatbanService],
})
export class TnhaxuatbanModule {}
