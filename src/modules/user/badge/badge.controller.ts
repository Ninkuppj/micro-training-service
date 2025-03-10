import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BadgeService } from './Badge.service';

@Controller('badge')
export class BadgeController {
  constructor(private readonly badgeService: BadgeService) {}

  @Post()
  create(@Body() createBadgeDto: any) {
    return this.badgeService.create(createBadgeDto);
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
  update(@Param('id') id: string, @Body() updateBadgeDto: any) {
    return this.badgeService.update(+id, updateBadgeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.badgeService.remove(+id);
  }
}
