import { Injectable } from '@nestjs/common';

@Injectable()
export class courseService {
  create(createcourseDto: any) {
    return 'This action adds a new course';
  }

  findAll() {
    return `This action returns all course`;
  }

  findOne(id: number) {
    return `This action returns a # course`;
  }

  update(id: number, updatecourseDto: any) {
    return `This action updates a # course`;
  }

  remove(id: number) {
    return `This action removes a # course`;
  }
}
