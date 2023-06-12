import { Controller, Get, Post, Query, Render, Req, Res, UseGuards, Body } from "@nestjs/common";
import { Response, Request } from "express";
import AuthGuard from "src/guards/auth.guard";
import { QueryExerciseDto } from "./exercise.dto";
import ListExerciseService from "./services/listExercises.service";

@Controller("exercise")
export default class ExerciseControler {

    constructor(
        private readonly ListExerciseService: ListExerciseService,
    ){}

    @Get("")
    @UseGuards(AuthGuard)
    async list(@Query() query:QueryExerciseDto) {        
        return await this.ListExerciseService.main(query)
    }
}