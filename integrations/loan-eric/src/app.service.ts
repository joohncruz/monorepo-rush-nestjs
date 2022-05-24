import { Injectable } from '@nestjs/common';
import { sayGoodbye } from '@lab/loan-core';

@Injectable()
export class AppService {
  getGoodbye(): string {
    return sayGoodbye();
  }
}
