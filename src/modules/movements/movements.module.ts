import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Movements } from "src/modules/movements/Movements.entity";
import MovementsController from "./movements.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Movements])],
    providers: [],
    controllers: [MovementsController]
})
export default class MovementsModule {}