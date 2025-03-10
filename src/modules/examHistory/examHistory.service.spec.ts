import { Test, TestingModule } from '@nestjs/testing';
import { examHistoryService } from './examHistory.service';

describe('examHistoryService', () => {
  let service: examHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [examHistoryService],
    }).compile();

    service = module.get<examHistoryService>(examHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
