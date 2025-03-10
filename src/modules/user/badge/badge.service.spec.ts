import { Test, TestingModule } from '@nestjs/testing';
import { courseService } from './course.service';

describe('courseService', () => {
  let service: courseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [courseService],
    }).compile();

    service = module.get<courseService>(courseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
