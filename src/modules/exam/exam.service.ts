import { Injectable } from '@nestjs/common';

@Injectable()
export class examService {
  create(createexamDto: any) {
    return 'This action adds a new exam';
  }

  findAll() {
    return `This action returns all exam`;
  }

  findOne(id: number) {
    return `This action returns a # exam`;
  }

  update(id: number, updateexamDto: any) {
    return `This action updates a # exam`;
  }

  remove(id: number) {
    return `This action removes a # exam`;
  }
}
