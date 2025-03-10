import { Module } from '@nestjs/common';
import { lectureController } from './lecture.controller';
import { lectureService } from './lecture.service';

@Module({
  controllers: [lectureController],
  providers: [lectureService],
  exports: [lectureService]
})
export class lectureModule {}
