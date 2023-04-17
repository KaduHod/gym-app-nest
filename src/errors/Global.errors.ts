import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, NotFoundException } from "@nestjs/common";
import { UnhandledError } from "./app.errors";
import { Response } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";


@Catch()
export default class GlobalErrorHandler implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost) {
        this.log(exception)
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        if (exception instanceof UnhandledError) {
            return response.status(500).send(exception.message)
        }

        if (exception instanceof NotFoundException) {
            return response.status(404).json({message:"Not Found"})
        }
        
        if (exception instanceof BadRequestException) {           
            return response.status(400).json(exception.getResponse())
        }
        
        if(exception instanceof PrismaClientKnownRequestError || exception.constructor.name === "PrismaClientKnownRequestError") {
            let error = exception as PrismaClientKnownRequestError
            return response.status(400).json({
                error: error.meta.cause,
            })
        }
       
        response.status(400).json({
            message: exception.message,
            ...exception
        })
    }

    log(exception:any) {
        console.error(exception)
    }
}