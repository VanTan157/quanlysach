import { Test, TestingModule } from '@nestjs/testing';
import { TtheloaiController } from './ttheloai.controller';
import { TtheloaiService } from './ttheloai.service';

describe('TtheloaiController', () => {
  let controller: TtheloaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TtheloaiController],
      providers: [TtheloaiService],
    }).compile();

    controller = module.get<TtheloaiController>(TtheloaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
