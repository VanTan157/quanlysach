import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TsachModule } from './sach/tsach.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { TtheloaiModule } from './theloai/ttheloai.module';
import { TnhaxuatbanModule } from './nhaxuatban/tnhaxuatban.module';
import { Sach } from './sach/entities/tsach.entity';
import { TheLoai } from './theloai/entities/ttheloai.entity';
import { NhaXuatBan } from './nhaxuatban/entities/tnhaxuatban.entity';


@Module({
  imports: [
    TsachModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234567',
      database: 'QLBANSACH',
      entities: [Sach, TheLoai, NhaXuatBan],
      synchronize: false,
      autoLoadEntities: true,
    }),
    TtheloaiModule,
    TnhaxuatbanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
