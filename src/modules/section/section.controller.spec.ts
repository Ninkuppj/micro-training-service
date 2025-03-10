import { Test, TestingModule } from '@nestjs/testing';
import { sectionController } from './section.controller';
import { sectionService } from './section.service';

describe('sectionController', () => {
  let controller: sectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [sectionController],
      providers: [sectionService],
    }).compile();

    controller = module.get<sectionController>(sectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
