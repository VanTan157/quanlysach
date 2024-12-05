import { Controller, Get } from '@nestjs/common';
import { TnhaxuatbanService } from './tnhaxuatban.service';


@Controller('tnhaxuatban')
export class TnhaxuatbanController {
  constructor(private readonly tnhaxuatbanService: TnhaxuatbanService) {}

  

  @Get()
  findAll() {
    return this.tnhaxuatbanService.findAll();
  }

}
