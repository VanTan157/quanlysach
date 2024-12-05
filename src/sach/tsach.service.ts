import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sach } from './entities/tsach.entity';
import { CreateSachDto } from './dto/create-sach.dto';

@Injectable()
export class TsachService {

  constructor(
    @InjectRepository(Sach)
    private sachRepository: Repository<Sach>,
  ) {}
   async findAll(): Promise<Sach[]> {
    return this.sachRepository.find({
      relations: ['MaTheLoai', 'MaNXB'], // Nạp thông tin từ các mối quan hệ
    });
  }

  async create(createSachDto: CreateSachDto): Promise<Sach> {
    const sach = this.sachRepository.create(createSachDto);
    return await this.sachRepository.save(sach);
  }
}
