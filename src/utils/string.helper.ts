export const isString = (val:any): val is string => {
    return typeof val === "string";
}

export const toBool = (val:string): boolean => {
    return val && (val === 'true' || val === '1')
}

export const stringIsNumber = (val:string): boolean => {
    return /^\d+$/.test(val);
}