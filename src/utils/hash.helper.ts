import * as crypto from 'crypto'

const salt = "SECRET"
const iterations = 1000
const keyLength = 64
const digest = "sha512"
const encoding = "hex"

export const encrypt = (value:string) => {
    return crypto.pbkdf2Sync(
        value, 
        salt, 
        iterations, 
        keyLength, 
        digest
    ).toString(encoding);
}

export const checkHash = (value: string, hash:string) => encrypt(value) === hash;