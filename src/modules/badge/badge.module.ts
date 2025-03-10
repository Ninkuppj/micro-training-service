import { Module } from '@nestjs/common';
import { badgeController } from './badge.controller';
import { badgeService } from './badge.service';

@Module({
  controllers: [badgeController],
  providers: [badgeService],
  exports: [badgeService]
})
export class badgeModule {}
