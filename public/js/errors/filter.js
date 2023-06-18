import { AppError } from "./app.error.js";

const appErrors = ["UserError","AppError"]
export function GlobalErrorHandler({error}) {
    if(appErrors.includes(error.constructor.name)) {
        throw new AppError(error.message)
    }
}