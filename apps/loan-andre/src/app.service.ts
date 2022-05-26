import { Injectable } from '@nestjs/common';
import { sayHello } from '@lab/loan-core';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('getHello Andre');
    return sayHello();
  }
}
