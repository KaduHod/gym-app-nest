import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, NotFoundException } from "@nestjs/common";
import { UnhandledError } from "./app.errors";
import { Response } from "express";


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
            return response.status(404).json({
                stack: exception.stack,
                message: exception.message,
            })
        }

        if (exception instanceof BadRequestException) {           
            return response.status(400).json(exception.getResponse())
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