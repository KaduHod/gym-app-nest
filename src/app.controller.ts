import { Body, Controller, Get, Post, Render, Req, Res, UseGuards } from '@nestjs/common';
import { Response, Request } from 'express';
import AuthGuard from './guards/auth.guard';
import LoginRequest from './login.validator';
import AuthService from './modules/auth/auth.service';

@Controller("/")
export class AppController {
  	constructor(
  	  	public readonly authService: AuthService
  	) {}

  	@Get('login')
  	login(@Res() res:Response, @Req() req:Request) {
  	  	return res
  	    	.render('login', { layout: "default" })
  	}

	@Get('')
  	index(@Res() res:Response, @Req() req:Request) {
  	  	return res
  	    	.render('login', { layout: "default" })
  	}

  	@Get('register')
  	register(@Res() res:Response, @Req() req:Request) {
  	  	return res
  	  	  .render('register', { layout: "default" })
  	}

  	@Post("login")
  	async logIn(@Body() loginRequest: LoginRequest, @Res() res: Response) {
  	    const {email, password} = loginRequest
  	    const login = await this.authService.login({email, password})
	
  	    if(!login.accessToken) {
  	      return res.render('login', { message: login.message, bg:'bg-red-100', layout: "default" })
  	    }

  	    return res
  	      .cookie('accessToken', login.accessToken, {maxAge: 60 * 60 * 2000})
  	      .cookie('refreshToken', login.refreshToken, {maxAge: 60 * 60 * 2000})
  	      .status(302)
  	      .redirect("http://localhost:4567/home")
  	}

  	@UseGuards(AuthGuard)
  	@Get('home')
  	home(@Req() req: Request,@Res() res:Response) {
  	  	return res.render('home')
  	}
}
