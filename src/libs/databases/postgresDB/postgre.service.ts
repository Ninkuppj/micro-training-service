import { Inject, Injectable } from '@nestjs/common';
import { Connection, ObjectLiteral, Repository } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(@Inject('Connection') public connection: Connection) {}
  public async getRepository<T extends ObjectLiteral>(entity: any): Promise<Repository<T>> {
    return this.connection.getRepository(entity);
  }
}
