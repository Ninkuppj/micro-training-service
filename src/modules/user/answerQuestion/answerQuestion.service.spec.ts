import { Test, TestingModule } from '@nestjs/testing';
import { AnswerQuestionService } from './answerQuestion.service';

describe('sectionService', () => {
  let service: AnswerQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnswerQuestionService],
    }).compile();

    service = module.get<AnswerQuestionService>(AnswerQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
