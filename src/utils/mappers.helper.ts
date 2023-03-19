import { Mapped } from "src/domain/Entity"

function ArrayMapper(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = function<T extends Mapped>(entity: T | T[]) {
      if (Array.isArray(entity)) {
        return entity.map(entity => entity.mapToHttp());
      } else {
        return entity.mapToHttp();
      }
    }
    return descriptor;
}

export class Mapper {
    @ArrayMapper
    static mapToHttp<T extends Mapped>(entity: T | T[]) {
      return {
        mapToHttp() {
          return entity;
        }
      }
    }
}
