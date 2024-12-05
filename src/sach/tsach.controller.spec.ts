import { Test, TestingModule } from '@nestjs/testing';
import { TsachController } from './tsach.controller';
import { TsachService } from './tsach.service';

describe('TsachController', () => {
  let controller: TsachController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TsachController],
      providers: [TsachService],
    }).compile();

    controller = module.get<TsachController>(TsachController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
