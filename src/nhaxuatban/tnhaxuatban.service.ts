import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NhaXuatBan } from './entities/tnhaxuatban.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TnhaxuatbanService {

  constructor(
    @InjectRepository(NhaXuatBan)
    private NXBRepository: Repository<NhaXuatBan>,
  ) {}

  async findAll(): Promise<NhaXuatBan[]> {
    return this.NXBRepository.find();
  }
}
