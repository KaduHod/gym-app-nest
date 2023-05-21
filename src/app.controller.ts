import { Controller, Get, Render } from '@nestjs/common';

@Controller("/index")
export class AppController {
  constructor(
  ) {}

  @Get()
  @Render("main")
  getHello() {
    return { message: 'Hello world!' };
  }

}
