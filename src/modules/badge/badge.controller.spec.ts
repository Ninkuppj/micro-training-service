import { Test, TestingModule } from '@nestjs/testing';
import { badgeController } from './badge.controller';
import { badgeService } from './badge.service';

describe('badgeController', () => {
  let controller: badgeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [badgeController],
      providers: [badgeService],
    }).compile();

    controller = module.get<badgeController>(badgeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
