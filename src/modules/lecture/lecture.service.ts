import { Injectable } from '@nestjs/common';

@Injectable()
export class lectureService {
  create(createlectureDto: any) {
    return 'This action adds a new lecture';
  }

  findAll() {
    return `This action returns all lecture`;
  }

  findOne(id: number) {
    return `This action returns a # lecture`;
  }

  update(id: number, updatelectureDto: any) {
    return `This action updates a # lecture`;
  }

  remove(id: number) {
    return `This action removes a # lecture`;
  }
}
