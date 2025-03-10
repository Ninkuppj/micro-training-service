import { Test, TestingModule } from '@nestjs/testing';
import { examController } from './exam.controller';
import { examService } from './exam.service';

describe('examController', () => {
  let controller: examController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [examController],
      providers: [examService],
    }).compile();

    controller = module.get<examController>(examController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
