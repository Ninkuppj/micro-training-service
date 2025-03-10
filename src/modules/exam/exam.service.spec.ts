import { Test, TestingModule } from '@nestjs/testing';
import { examService } from './exam.service';

describe('examService', () => {
  let service: examService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [examService],
    }).compile();

    service = module.get<examService>(examService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
