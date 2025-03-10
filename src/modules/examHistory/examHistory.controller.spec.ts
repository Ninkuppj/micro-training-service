import { Test, TestingModule } from '@nestjs/testing';
import { examHistoryController } from './examHistory.controller';
import { examHistoryService } from './examHistory.service';

describe('examHistoryController', () => {
  let controller: examHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [examHistoryController],
      providers: [examHistoryService],
    }).compile();

    controller = module.get<examHistoryController>(examHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
