import { Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { findByArgsResult } from "./knex";

@Injectable()
export class KnexRepository {
    constructor(){}
    
    setFindByArguments<T>(args:T, tableName: string): findByArgsResult {
        let result = {} 
        for (const key in args) 
        {
            result[`${tableName}.${key}` as keyof findByArgsResult] = args[key]
        }
        return result as findByArgsResult 
    }

    setWhereClauses(query: Knex.QueryBuilder, params:findByArgsResult): Knex.QueryBuilder {
        Object.keys(params).forEach( prop => {
            if(Array.isArray(params[prop])) {
                query.whereIn(prop, params[prop])
            } else {
                query.where(prop, params[prop])
            }
        })
        return query
    }
}