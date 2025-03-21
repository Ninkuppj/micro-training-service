import { Module } from '@nestjs/common';
import { categoryController } from './category.controller';
import { categoryService } from './category.service';

@Module({
  controllers: [categoryController],
  providers: [categoryService],
  exports: [categoryService]
})
export class categoryModule {}
