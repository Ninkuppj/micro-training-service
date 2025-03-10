import { Injectable } from '@nestjs/common';

@Injectable()
export class questionService {
  create(createquestionDto: any) {
    return 'This action adds a new question';
  }

  findAll() {
    return `This action returns all question`;
  }

  findOne(id: number) {
    return `This action returns a # question`;
  }

  update(id: number, updatequestionDto: any) {
    return `This action updates a # question`;
  }

  remove(id: number) {
    return `This action removes a # question`;
  }
}
