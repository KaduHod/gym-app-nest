import { ArgumentsHost, Catch } from "@nestjs/common";
import { QueryFailedError } from "typeorm";
import { Response } from "express";
import mysqlErrors from "./mysql.errors";

@Catch(QueryFailedError)
export default class TypeOrmExceptionFilter {
    catch(exception: QueryFailedError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const { errno, code } = exception.driverError 

        console.error(exception)
        
        if(!errno) return response.status(500).json("query failed")

        const info = mysqlErrors[errno]

        if(!info) return response.status(500).json("query failed")

        return response.status(400).json(info(exception))
    }
} 