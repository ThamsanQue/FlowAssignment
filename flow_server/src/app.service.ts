import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello there 👋, team @Flow! ThamsanqaJ sends his best wishes.';
  }
}
