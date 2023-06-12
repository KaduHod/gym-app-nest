import { Controller, Get, Render, UseGuards } from "@nestjs/common";
import AuthGuard from "src/guards/auth.guard";

@Controller("workouts")
export default class WorkoutsController {
    constructor(){}

    @Get("")
    @UseGuards(AuthGuard)
    @Render('workouts/index')
    async index(){
        
    }
}