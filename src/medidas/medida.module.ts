import { Module } from "@nestjs/common";
import MedidaController from "./medida.controller";

@Module({
    imports: [],
    controllers: [MedidaController],
    providers: []
})
export default class MedidasModule {}