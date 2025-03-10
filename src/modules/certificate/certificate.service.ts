import { Injectable } from '@nestjs/common';

@Injectable()
export class CertificateService {
  create(createcertificateDto: any) {
    return 'This action adds a new certificate';
  }

  findAll() {
    return `This action returns all certificate`;
  }

  findOne(id: number) {
    return `This action returns a # certificate`;
  }

  update(id: number, updatecertificateDto: any) {
    return `This action updates a # certificate`;
  }

  remove(id: number) {
    return `This action removes a # certificate`;
  }
}
