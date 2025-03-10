import { Injectable } from '@nestjs/common';

@Injectable()
export class examHistoryService {
  create(createexamHistoryDto: any) {
    return 'This action adds a new examHistory';
  }

  findAll() {
    return `This action returns all examHistory`;
  }

  findOne(id: number) {
    return `This action returns a # examHistory`;
  }

  update(id: number, updateexamHistoryDto: any) {
    return `This action updates a # examHistory`;
  }

  remove(id: number) {
    return `This action removes a # examHistory`;
  }
}
