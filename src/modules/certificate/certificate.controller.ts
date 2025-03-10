import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CertificateService } from './certificate.service';

@Controller('certificate')
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) {}

  @Post()
  create(@Body() createcertificateDto: any) {
    return this.certificateService.create(createcertificateDto);
  }

  @Get()
  findAll() {
    return this.certificateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.certificateService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatecertificateDto: any) {
    return this.certificateService.update(+id, updatecertificateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.certificateService.remove(+id);
  }
}
