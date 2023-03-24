export interface CommonFields {
    createdAt: Date;
    updatedAt: Date;
    created_at: Date;
    updated_at: Date;
}

export default class EntityMapper {
    static commonFields = ["createdAt", "updatedAt", "created_at", "updated_at"];
    static mapCommonFields<T, K extends keyof T>(entity: T, ...fields: K[]): Pick<T, K> {
        const result = {} as Pick<T, K>;
        for (const field of fields) {
          result[field] = entity[field];
        }
        return result;
    }
    static removeCommonFields<T extends {[key:string]: any}>(entity:T): Omit<T, "createdAt" | "updatedAt" | "created_at" | "updated_at"> {
        const {createdAt, updatedAt,created_at, updated_at,  ...rest } = entity
        return rest
    }
} 