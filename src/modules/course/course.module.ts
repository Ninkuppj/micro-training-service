import { Module } from '@nestjs/common';
import { courseController } from './course.controller';
import { courseService } from './course.service';

@Module({
  controllers: [courseController],
  providers: [courseService],
  exports: [courseService]
})
export class courseModule {}
