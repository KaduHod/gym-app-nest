export type NeverEmpty<T> = (keyof T extends never ? never : {}) 
