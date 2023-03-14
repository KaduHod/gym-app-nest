export function pruneUndefineds<T>(value: T): Partial<T> {
    const prunedValue = {} as T;
    for (const prop in value) {
        if (value[prop] !== undefined && value[prop] !== null) {
            prunedValue[prop] = value[prop];
        }
    }
    return prunedValue;
}