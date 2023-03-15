import { Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { findByArgsResult } from "./knex";
import enums from '../utils/enums'
import { DuplicatedData, UnhandledError } from "src/errors/app.errors";

@Injectable()
export default class KnexRepository {
    constructor(){}

    setFindByArguments<T>(args:T, tableName: string): findByArgsResult {
        let result = {} 
        for (const key in args) { 
            result[`${tableName}.${key}` as keyof findByArgsResult] = args[key];
        }
        return result as findByArgsResult 
    }

    setWhereClauses(query: Knex.QueryBuilder, params:findByArgsResult): Knex.QueryBuilder {
        Object.keys(params).forEach( prop => {
            if (Array.isArray(params[prop])) {
                query.whereIn(prop, params[prop]);
            } else { 
                query.where(prop, params[prop]);
            }
        })
        return query
    }

    handleError(error: Error | any, obj:any): void {
        if (enums.mysqlErrors.DUPLICATED_DATA === error.code) {
            const duplicateErrorText = error.message.split('for key')[1].trim()
            if (duplicateErrorText.indexOf('users.users_nickname_unique') > -1) {
                throw new DuplicatedData("Username")
            }
            if (duplicateErrorText.indexOf('users.users_email_unique') > -1) {
                throw new DuplicatedData("Email")
            }
        }
        throw new UnhandledError(error)
    }
}