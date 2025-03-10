import { Injectable } from '@nestjs/common';

@Injectable()
export class categoryService {
  create(createcategoryDto: any) {
    return 'This action adds a new category';
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a # category`;
  }

  update(id: number, updatecategoryDto: any) {
    return `This action updates a # category`;
  }

  remove(id: number) {
    return `This action removes a # category`;
  }
}
