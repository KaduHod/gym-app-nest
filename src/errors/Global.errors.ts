import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, NotFoundException } from "@nestjs/common";
import { UnhandledError } from "./app.errors";
import { Request, Response } from "express";
import { InvalidCredentials } from "src/guards/auth.guard";

const isApi = (path:string) => path.split('/')[1] === 'api';
@Catch()
export default class GlobalErrorHandler implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost) {
        this.log(exception)
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        if (exception instanceof UnhandledError) {
            return response.status(500).send(exception.message)
        }

        if (exception instanceof NotFoundException) {
            return response.status(404).json({message: exception.message ?? "Not Found"})
        }
        
        if (exception instanceof BadRequestException) {           
            return response.status(400).json(exception.getResponse())
        }

        if ( exception instanceof InvalidCredentials) {
            console.log(request.baseUrl)
            return isApi(request.route.path)
                ? response.status(401).send("Invalid credentials")
                : response.redirect('/login');
        }
       
        return response.status(400).json({
            message: exception.message,
            ...exception
        })
    }

    log(exception:any) {
        console.error(exception)
    }
}