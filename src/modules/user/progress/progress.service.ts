import { Injectable } from '@nestjs/common';

@Injectable()
export class ProgressService {
  create(createProgressDto: any) {
    return 'This action adds a new Progress';
  }

  findAll() {
    return `This action returns all Progress`;
  }

  findOne(id: number) {
    return `This action returns a # Progress`;
  }

  update(id: number, updateProgressDto: any) {
    return `This action updates a # Progress`;
  }

  remove(id: number) {
    return `This action removes a # Progress`;
  }
}
