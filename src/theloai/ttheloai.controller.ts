import { Controller, Get} from '@nestjs/common';
import { TtheloaiService } from './ttheloai.service';

@Controller('ttheloai')
export class TtheloaiController {
  constructor(private readonly ttheloaiService: TtheloaiService) {}

  @Get()
  findAll() {
    return this.ttheloaiService.findAll();
  }
}
