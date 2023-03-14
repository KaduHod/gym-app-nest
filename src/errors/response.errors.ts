import { HttpException, HttpStatus } from "@nestjs/common";

export class HttpDuplicatedData extends HttpException {
    constructor(error: Error | any){
        super({message:error.message}, HttpStatus.BAD_REQUEST)
    }
}

export class HttpUnhandledError extends HttpException {
    constructor(error: Error | any) {
        super(
            error.message, 
            HttpStatus.INTERNAL_SERVER_ERROR, 
            {cause:error}
        )
    }
} 