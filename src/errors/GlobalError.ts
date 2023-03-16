import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
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
        response.status(400).json({
            message: exception.message,
            ...exception
        })
    }

    log(exception:any) {
        console.error(exception)
    }
}