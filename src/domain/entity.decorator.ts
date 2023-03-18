export function Entity<T extends { new(...args: any[]): {} }>() {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
          public id: number;
          public createdAt: Date
          public updatedAt: Date
        };
    };
}

export function Table(tableName: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
          public table = tableName;
        };
    };
}
  