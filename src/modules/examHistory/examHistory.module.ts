import { Module } from '@nestjs/common';
import { examHistoryController } from './examHistory.controller';
import { examHistoryService } from './examHistory.service';

@Module({
  controllers: [examHistoryController],
  providers: [examHistoryService],
  exports: [examHistoryService]
})
export class examHistoryModule {}
