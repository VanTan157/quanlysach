import { Test, TestingModule } from '@nestjs/testing';
import { TtheloaiService } from './ttheloai.service';

describe('TtheloaiService', () => {
  let service: TtheloaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TtheloaiService],
    }).compile();

    service = module.get<TtheloaiService>(TtheloaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
