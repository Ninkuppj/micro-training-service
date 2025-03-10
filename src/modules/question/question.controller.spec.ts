import { Test, TestingModule } from '@nestjs/testing';
import { questionController } from './question.controller';
import { questionService } from './question.service';

describe('questionController', () => {
  let controller: questionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [questionController],
      providers: [questionService],
    }).compile();

    controller = module.get<questionController>(questionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
