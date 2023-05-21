export function pruneUndefineds<T>(value: T): Partial<T> {
    const prunedValue = {} as T;
    for (const prop in value) {
        if (value[prop] !== undefined && value[prop] !== null) {
            prunedValue[prop] = value[prop];
        }
    }
    return prunedValue;
}

export const deepCoppy = <T extends Object>(obj:T): T => {
    const copy = {} as T;
    for (let [key, value] of Object.entries(obj)) {
        if(typeof value === "object") {
            value = Array.isArray(value) 
                ? value.map(deepCoppy) 
                : deepCoppy(value);
        } 
        copy[key] = value
    }
    return copy;
}