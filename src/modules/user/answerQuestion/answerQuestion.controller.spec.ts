import { Test, TestingModule } from '@nestjs/testing';
import { AnswerQuestionController } from './AnswerQuestion.controller';
import { AnswerQuestionService } from './answerQuestion.service';

describe('sectionController', () => {
  let controller: AnswerQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnswerQuestionController],
      providers: [AnswerQuestionService],
    }).compile();

    controller = module.get<AnswerQuestionController>(AnswerQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
