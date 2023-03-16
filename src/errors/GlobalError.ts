import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { InvalidUserError, UnhandledError } from "./app.errors";
import { Response } from "express";


@Catch()
export default class GlobalErrorHandler implements ExceptionFilter {
    catch(exception: Error, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        console.log('\n\n');
        
        console.error("aquiiiiiii",exception)
        console.log('\n\n');
        if (exception instanceof UnhandledError) {
            return response.status(500).send(exception.message)
        }
        response.status(400).json({
            message: exception.message,
            ...exception
        })
    }
}