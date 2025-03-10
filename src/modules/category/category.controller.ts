import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { categoryService } from './category.service';

@Controller('category')
export class categoryController {
  constructor(private readonly categoryService: categoryService) {}

  @Post()
  create(@Body() createcategoryDto: any) {
    return this.categoryService.create(createcategoryDto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatecategoryDto: any) {
    return this.categoryService.update(+id, updatecategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
