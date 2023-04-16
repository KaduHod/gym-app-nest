import { Inject } from "@nestjs/common";
import { DataSource, EntityTarget, Repository } from "typeorm";

export default class AppRepository<T> {
    private repository: Repository<T>
    constructor(
        @Inject("DATA_SOURCE") private datasource: DataSource,
        entity:EntityTarget<T>
    ) {
        this.repository = this.datasource.getRepository(entity)
    }
}