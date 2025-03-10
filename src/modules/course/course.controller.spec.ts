import { Test, TestingModule } from '@nestjs/testing';
import { courseController } from './course.controller';
import { courseService } from './course.service';

describe('courseController', () => {
  let controller: courseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [courseController],
      providers: [courseService],
    }).compile();

    controller = module.get<courseController>(courseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
