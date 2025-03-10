import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { lectureService } from './lecture.service';

@Controller('lecture')
export class lectureController {
  constructor(private readonly lectureService: lectureService) {}

  @Post()
  create(@Body() createlectureDto: any) {
    return this.lectureService.create(createlectureDto);
  }

  @Get()
  findAll() {
    return this.lectureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lectureService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatelectureDto: any) {
    return this.lectureService.update(+id, updatelectureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lectureService.remove(+id);
  }
}
