import { Injectable } from '@nestjs/common';

@Injectable()
export class answerService {
  create(createanswerDto: any) {
    return 'This action adds a new answer';
  }

  findAll() {
    return `This action returns all answer`;
  }

  findOne(id: number) {
    return `This action returns a # answer`;
  }

  update(id: number, updateanswerDto: any) {
    return `This action updates a # answer`;
  }

  remove(id: number) {
    return `This action removes a # answer`;
  }
}
