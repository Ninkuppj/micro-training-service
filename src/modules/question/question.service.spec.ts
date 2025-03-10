import { Test, TestingModule } from '@nestjs/testing';
import { questionService } from './question.service';

describe('questionService', () => {
  let service: questionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [questionService],
    }).compile();

    service = module.get<questionService>(questionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
