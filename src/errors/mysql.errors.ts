import { QueryFailedError } from "typeorm"

const getForgeinKeyColumnRegex = /(\w+)`\)\s*REFERENCES\s*`\w+`\s*\(`(\w+)/
const extractForgeinKeyError = (sqlMessage:string) => {
    const field = sqlMessage.match(getForgeinKeyColumnRegex)[1].split("_").join(" ")
    return `${field} not found!`;
}

export default {
    1062: (_:QueryFailedError) => {
        return {
            message: "Duplicated data",
            cause: "Unique Constraint Failed",
            code: 1062
        }
    },
    1452: (error:QueryFailedError) => {
        const info = {message: "Foreing key error!"}
        if(error['sqlMessage']) {
            info.message = extractForgeinKeyError(error['sqlMessage'])
        }
        return info
    }
}