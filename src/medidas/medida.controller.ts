import { Controller, Get } from "@nestjs/common";

@Controller("medidas")
export default class MedidaController {
    constructor(
    ) {}
    
    @Get()
    async teste() {
        return {"message":"message"}
    }
}