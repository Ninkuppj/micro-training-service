import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { courseService } from './course.service';

@Controller('course')
export class courseController {
  constructor(private readonly courseService: courseService) {}

  @Post()
  create(@Body() createcourseDto: any) {
    return this.courseService.create(createcourseDto);
  }

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatecourseDto: any) {
    return this.courseService.update(+id, updatecourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(+id);
  }
}
