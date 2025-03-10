import { Injectable } from '@nestjs/common';

@Injectable()
export class badgeService {
  create(createbadgeDto: any) {
    return 'This action adds a new badge';
  }

  findAll() {
    return `This action returns all badge`;
  }

  findOne(id: number) {
    return `This action returns a # badge`;
  }

  update(id: number, updatebadgeDto: any) {
    return `This action updates a # badge`;
  }

  remove(id: number) {
    return `This action removes a # badge`;
  }
}
