import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { answerService } from './answer.service';

@Controller('answer')
export class answerController {
  constructor(private readonly answerService: answerService) {}

  @Post()
  create(@Body() createanswerDto: any) {
    return this.answerService.create(createanswerDto);
  }

  @Get()
  findAll() {
    return this.answerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.answerService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateanswerDto: any) {
    return this.answerService.update(+id, updateanswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.answerService.remove(+id);
  }
}
