import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AnswerQuestionService } from './answerQuestion.service';

@Controller('section')
export class AnswerQuestionController {
  constructor(private readonly sectionService: AnswerQuestionService) {}

  @Post()
  create(@Body() createsectionDto: any) {
    return this.sectionService.create(createsectionDto);
  }

  @Get()
  findAll() {
    return this.sectionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectionService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatesectionDto: any) {
    return this.sectionService.update(+id, updatesectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sectionService.remove(+id);
  }
}
