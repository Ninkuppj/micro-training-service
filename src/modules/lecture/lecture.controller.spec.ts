import { Test, TestingModule } from '@nestjs/testing';
import { lectureController } from './lecture.controller';
import { lectureService } from './lecture.service';

describe('lectureController', () => {
  let controller: lectureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [lectureController],
      providers: [lectureService],
    }).compile();

    controller = module.get<lectureController>(lectureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
