import { Test, TestingModule } from '@nestjs/testing';
import { answerController } from './answer.controller';
import { answerService } from './answer.service';

describe('answerController', () => {
  let controller: answerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [answerController],
      providers: [answerService],
    }).compile();

    controller = module.get<answerController>(answerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
