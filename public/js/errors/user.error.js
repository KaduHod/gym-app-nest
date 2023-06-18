import { AppError } from "/js/errors/app.error.js"
export class UserError extends AppError {
    constructor(message){
        super(message, "app-user-error")
    }
}