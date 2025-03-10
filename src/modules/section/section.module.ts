import { Module } from '@nestjs/common';
import { sectionController } from './section.controller';
import { sectionService } from './section.service';

@Module({
  controllers: [sectionController],
  providers: [sectionService],
  exports: [sectionService]
})
export class sectionModule {}
