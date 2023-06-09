import { CanActivate, ExecutionContext, Injectable, Redirect } from "@nestjs/common";
import AuthService from "src/modules/auth/auth.service";
import { Request, Response } from "express";
import { IncomingHttpHeaders } from "http";

export class InvalidCredentials extends Error {
    constructor(){
        super('Invalid credentials')
    }
}


@Injectable()
export default class AuthGuard implements CanActivate {
    constructor(
        public readonly authService: AuthService
    ){}
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest<Request>();
        const response = context.switchToHttp().getResponse<Response>()
        const {headers, cookies} = request;
        const accessToken = headers.accessToken as string ?? cookies.accessToken as string;
        const refreshToken = headers.refreshToken as string ?? cookies.refreshToken as string;

        if(!accessToken || !refreshToken) {
            response.cookie('accessToken', '', {expires: new Date(0)});
            response.cookie('refreshToken', '', {expires: new Date(0)});
            throw new InvalidCredentials()
        }

        const valid = await this.authService.checkToken(accessToken)

        if(valid) return true

        const newAccesToken = await this.authService.refresh(refreshToken)

        if(newAccesToken) {
            response.cookie('accessToken', newAccesToken, {maxAge: 60 * 60 * 2000})
            return true
        }
        
        response.cookie('accessToken', '', {expires: new Date(0)});
        response.cookie('refreshToken', '', {expires: new Date(0)});
        throw new InvalidCredentials()
    }

}