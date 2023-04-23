import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Articulation } from "src/entitys/Articulations.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Articulation])],
    controllers:[],
    providers:[]
})
export default class ArticulationModule {}