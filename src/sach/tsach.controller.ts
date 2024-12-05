import { Body, Controller, Get, Post } from '@nestjs/common';
import { TsachService } from './tsach.service';
import { CreateSachDto } from './dto/create-sach.dto';
import { Sach } from './entities/tsach.entity';


@Controller('tsach')
export class TsachController {
  constructor(private readonly sachService: TsachService) {}
  @Get()
  findAll() {
    return this.sachService.findAll();
  }

  @Post()
  async create(@Body() createSachDto: CreateSachDto): Promise<Sach> {
    return this.sachService.create(createSachDto);
  }
}
