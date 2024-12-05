import { Test, TestingModule } from '@nestjs/testing';
import { TnhaxuatbanController } from './tnhaxuatban.controller';
import { TnhaxuatbanService } from './tnhaxuatban.service';

describe('TnhaxuatbanController', () => {
  let controller: TnhaxuatbanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TnhaxuatbanController],
      providers: [TnhaxuatbanService],
    }).compile();

    controller = module.get<TnhaxuatbanController>(TnhaxuatbanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
