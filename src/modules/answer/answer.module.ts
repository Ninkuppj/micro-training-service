import { Module } from '@nestjs/common';
import { answerController } from './answer.controller';
import { answerService } from './answer.service';

@Module({
  controllers: [answerController],
  providers: [answerService],
  exports: [answerService]
})
export class answerModule {}
