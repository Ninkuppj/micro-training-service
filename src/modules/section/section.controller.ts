import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { sectionService } from './section.service';

@Controller('section')
export class sectionController {
  constructor(private readonly sectionService: sectionService) {}

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
