import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { examService } from './exam.service';

@Controller('exam')
export class examController {
  constructor(private readonly examService: examService) {}

  @Post()
  create(@Body() createexamDto: any) {
    return this.examService.create(createexamDto);
  }

  @Get()
  findAll() {
    return this.examService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateexamDto: any) {
    return this.examService.update(+id, updateexamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examService.remove(+id);
  }
}
