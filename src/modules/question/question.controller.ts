import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { questionService } from './question.service';

@Controller('question')
export class questionController {
  constructor(private readonly questionService: questionService) {}

  @Post()
  create(@Body() createquestionDto: any) {
    return this.questionService.create(createquestionDto);
  }

  @Get()
  findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatequestionDto: any) {
    return this.questionService.update(+id, updatequestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionService.remove(+id);
  }
}
