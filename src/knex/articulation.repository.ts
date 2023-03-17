import { Inject, Injectable } from "@nestjs/common";
import { Knex } from "knex";
import KnexRepository from "./knex.repository";
import { ArticulationRepositoryI } from './repository'

@Injectable()
export default class ArticulationRepository
                extends KnexRepository
                implements ArticulationRepositoryI
{
    constructor(
        @Inject('KnexConnection') private knex:Knex
    ) {
        super()
    }
}