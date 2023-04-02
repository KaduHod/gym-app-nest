import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import MedidaController from "./medida.controller";

@Module({
    imports: [],
    controllers: [MedidaController],
    providers: [PrismaService]
})
export default class MedidasModule {}