import { Injectable } from "@nestjs/common";

@Injectable()
export class KnexRepository {
    constructor(){}

    setFindByArguments<T>(args:T, tableName: string): object {
        return {}
    }
}