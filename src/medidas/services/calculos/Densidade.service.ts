import { Injectable } from "@nestjs/common";
import { DobrasCutaneas } from "@prisma/client";

@Injectable()
export default class DensidadeCoporalService {
    private dobras: Omit<DobrasCutaneas, "createdAt" | "UpdatedAt">
    constructor(){

    }
}