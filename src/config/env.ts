import * as dotenv from 'dotenv'
dotenv.config()

export const getEnv = () => {
    const stage = process.env.ENVIROMENT
    const regex = new RegExp(`^${stage}_.*`)
    const keys = Object.keys(process.env).filter(key => key.match(regex))
    return keys.reduce((acc, key) => {
        const newKey = key.split(`${stage}_`)[1]
        acc[newKey] = process.env[key]
        return acc
    }, {})
}