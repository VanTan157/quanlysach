import { Test, TestingModule } from '@nestjs/testing';
import { TsachService } from './tsach.service';

describe('TsachService', () => {
  let service: TsachService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TsachService],
    }).compile();

    service = module.get<TsachService>(TsachService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
