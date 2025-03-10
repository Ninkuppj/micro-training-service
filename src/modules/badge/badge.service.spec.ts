import { Test, TestingModule } from '@nestjs/testing';
import { badgeService } from './badge.service';

describe('badgeService', () => {
  let service: badgeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [badgeService],
    }).compile();

    service = module.get<badgeService>(badgeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
