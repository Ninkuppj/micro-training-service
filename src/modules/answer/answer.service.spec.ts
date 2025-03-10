import { Test, TestingModule } from '@nestjs/testing';
import { answerService } from './answer.service';

describe('answerService', () => {
  let service: answerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [answerService],
    }).compile();

    service = module.get<answerService>(answerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
