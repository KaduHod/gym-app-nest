import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller("/")
export class AppController {
  constructor(
  ) {}

  @Get()
  getHello(@Res() res:Response) {
    return res.render('main', { layout: "templates/default" })
  }

}
