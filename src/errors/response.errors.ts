import { HttpException, HttpStatus } from "@nestjs/common";
import { DuplicatedData, UserNotFound } from "./app.errors";

export class HttpDuplicatedData extends HttpException {
    constructor(error: DuplicatedData){
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

export class HttpInvalidCreateUserRequest extends HttpException {
    constructor(message: any) {
        super(
            {message},
            HttpStatus.BAD_REQUEST
        )
    }
}

export class HttpInvalidUpdateUserRequest extends HttpException {
    constructor(message: any) {
        super(
            {message},
            HttpStatus.BAD_REQUEST
        )
    }
}

export class HttpUserNotFoundError extends HttpException {
    constructor(error: UserNotFound) {
        super(error.message, HttpStatus.BAD_REQUEST, {cause: error})
    }
}

export class HttpInvalidUserParams extends HttpException {
    constructor(message:any) {
        super({
            message: 'Invalid query param!',
            ...message
        }, HttpStatus.BAD_REQUEST)
    }
}

export class HttpInvalidMuscleQueryParams extends HttpException {
    constructor(message:any) {
        super({
            message: 'Invalid query param!',
            ...message
        }, HttpStatus.BAD_REQUEST)
    }
}


export class HttpInvalidQueryParams extends HttpException {
    constructor(message:any) {
        super({
            message: 'Invalid query param!',
            ...message
        }, HttpStatus.BAD_REQUEST)
    } 
}