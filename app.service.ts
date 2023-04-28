import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  create(): string {
    throw new Error('Method not implemented.');
  }
  getPosts(): string {
    return 'Get posts';
  }
}
