import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Articulation } from "src/modules/articulation/Articulations.entity";
import ArticulationController from "./articulation.controller";

@Module({
    imports:[TypeOrmModule.forFeature([Articulation])],
    controllers:[ArticulationController],
    providers:[]
})
export default class ArticulationModule {}