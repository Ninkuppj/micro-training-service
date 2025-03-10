import { Module } from '@nestjs/common';
import { questionController } from './question.controller';
import { questionService } from './question.service';

@Module({
  controllers: [questionController],
  providers: [questionService],
  exports: [questionService]
})
export class questionModule {}
