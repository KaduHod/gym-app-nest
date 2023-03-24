export interface CommonFields {
    createdAt: Date;
    updatedAt: Date;
}

export default class EntityMapper {
    static commonFields = ["createdAt", "updatedAt"];
    static mapCommonFields<T, K extends keyof T>(entity: T, ...fields: K[]): Pick<T, K> {
        const result = {} as Pick<T, K>;
        for (const field of fields) {
          result[field] = entity[field];
        }
        return result;
    }
    static mapToDto<T extends CommonFields & {[key: string]: any}>(entity: T): T {
        const commonFields = this.mapCommonFields(entity, ...this.commonFields);
        return { ...entity, ...commonFields };
    }
    static removeCommonFields<T extends {[key:string]: any}>(entity:T): Omit<T, keyof CommonFields> {
        const {createdAt, updatedAt, ...rest } = entity
        return rest
    }
} 