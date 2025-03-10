import { Test, TestingModule } from '@nestjs/testing';
import { lectureService } from './lecture.service';

describe('lectureService', () => {
  let service: lectureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [lectureService],
    }).compile();

    service = module.get<lectureService>(lectureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
