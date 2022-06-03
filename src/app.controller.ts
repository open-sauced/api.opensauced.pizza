import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/random')
  getRandom(): string {
    return Math.random().toString();
  }
}
