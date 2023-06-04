import { Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';

@Controller("/")
export class AppController {
  constructor(
  ) {}

  @Get()
  getHello(@Res() res:Response) {
    return res.render('index')
  }

  @Post('home')
  home(@Req() req: Request,@Res() res:Response) {
    console.log(req.body)
    return res.render('home')
  }
}
