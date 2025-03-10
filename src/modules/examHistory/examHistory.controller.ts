import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { examHistoryService } from './examHistory.service';

@Controller('examHistory')
export class examHistoryController {
  constructor(private readonly examHistoryService: examHistoryService) {}

  @Post()
  create(@Body() createexamHistoryDto: any) {
    return this.examHistoryService.create(createexamHistoryDto);
  }

  @Get()
  findAll() {
    return this.examHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examHistoryService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateexamHistoryDto: any) {
    return this.examHistoryService.update(+id, updateexamHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examHistoryService.remove(+id);
  }
}
