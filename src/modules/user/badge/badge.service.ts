import { Injectable } from '@nestjs/common';

@Injectable()
export class BadgeService {
  create(createBadgeDto: any) {
    return 'This action adds a new Badge';
  }

  findAll() {
    return `This action returns all Badge`;
  }

  findOne(id: number) {
    return `This action returns a # Badge`;
  }

  update(id: number, updateBadgeDto: any) {
    return `This action updates a # Badge`;
  }

  remove(id: number) {
    return `This action removes a # Badge`;
  }
}
