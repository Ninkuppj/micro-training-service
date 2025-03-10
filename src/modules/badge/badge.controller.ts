import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { badgeService } from './badge.service';

@Controller('badge')
export class badgeController {
  constructor(private readonly badgeService: badgeService) {}

  @Post()
  create(@Body() createbadgeDto: any) {
    return this.badgeService.create(createbadgeDto);
  }

  @Get()
  findAll() {
    return this.badgeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.badgeService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatebadgeDto: any) {
    return this.badgeService.update(+id, updatebadgeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.badgeService.remove(+id);
  }
}
