import { Module } from '@nestjs/common';
import { examController } from './exam.controller';
import { examService } from './exam.service';

@Module({
  controllers: [examController],
  providers: [examService],
  exports: [examService]
})
export class examModule {}
