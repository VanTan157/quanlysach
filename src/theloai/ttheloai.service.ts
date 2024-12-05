import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TheLoai } from './entities/ttheloai.entity';
import { Repository } from 'typeorm';


@Injectable()
export class TtheloaiService {
     constructor(
    @InjectRepository(TheLoai)
    private TLRepository: Repository<TheLoai>,
  ) {}

  async findAll(): Promise<TheLoai[]> {
    return this.TLRepository.find();
  }
}
