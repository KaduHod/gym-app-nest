import { Injectable } from "@nestjs/common";
import LoginRequest from "src/login.validator";
import { getEnv } from "src/config/env";

const { AUTH_API } = getEnv()
const headers = {
    'Content-type':'application/json'
}

@Injectable()
export default class AuthService {
    public authEndpoint: string
    public targetService = 'web app';
    constructor(){
        this.authEndpoint = AUTH_API
    }

    async login({email, password}: LoginRequest){
        const body = {
            email, 
            password,
            targetService: this.targetService
        }

        const request = await fetch(this.authEndpoint + "/auth", {
            method: 'POST',
            headers: { ...headers },
            body: JSON.stringify(body)
        })

        if(request.status !== 201) {
            return {
                message: await request.text()
            }
        }
    
        const {accessToken, refreshToken} = await request.json()
        return {accessToken, refreshToken}
    }   

    async checkToken(accessToken:string){
        const request = await fetch(this.authEndpoint + "/check-token", {
            method: 'POST',
            headers: { ...headers },
            body: JSON.stringify({accessToken})
        })

        return request.status === 200;
    }   

    async refresh(refreshToken: string): Promise<string | undefined> {
        const request = await fetch(this.authEndpoint + "/refresh", {
            method: 'POST',
            headers: { ...headers },
            body: JSON.stringify({refreshToken})
        })

        if(request.status !== 200) {
            return undefined
        }
    
        const {accessToken} = await request.json()
        return accessToken
    }
}