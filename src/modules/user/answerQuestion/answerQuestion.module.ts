import { Module } from '@nestjs/common';
import { AnswerQuestionController } from './answerQuestion.controller';
import { AnswerQuestionService } from './answerQuestion.service';

@Module({
  controllers: [AnswerQuestionController],
  providers: [AnswerQuestionService],
  exports: [AnswerQuestionService]
})
export class sectionModule {}
