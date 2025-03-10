import { Test, TestingModule } from '@nestjs/testing';
import { categoryController } from './category.controller';
import { categoryService } from './category.service';

describe('categoryController', () => {
  let controller: categoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [categoryController],
      providers: [categoryService],
    }).compile();

    controller = module.get<categoryController>(categoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
