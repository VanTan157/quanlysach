import { Test, TestingModule } from '@nestjs/testing';
import { TnhaxuatbanService } from './tnhaxuatban.service';

describe('TnhaxuatbanService', () => {
  let service: TnhaxuatbanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TnhaxuatbanService],
    }).compile();

    service = module.get<TnhaxuatbanService>(TnhaxuatbanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
