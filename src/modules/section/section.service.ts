import { Injectable } from '@nestjs/common';

@Injectable()
export class sectionService {
  create(createsectionDto: any) {
    return 'This action adds a new section';
  }

  findAll() {
    return `This action returns all section`;
  }

  findOne(id: number) {
    return `This action returns a # section`;
  }

  update(id: number, updatesectionDto: any) {
    return `This action updates a # section`;
  }

  remove(id: number) {
    return `This action removes a # section`;
  }
}
