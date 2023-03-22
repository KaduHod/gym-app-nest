import { Mapped } from "src/domain/Entity"

export class Mapper {
    static mapToHttp<T extends Mapped>(entity: T | T[]) {
        if (Array.isArray(entity)) {
            return entity.map(entity => entity.mapToHttp());
        } else {
            return entity.mapToHttp();
        }
    }
}
