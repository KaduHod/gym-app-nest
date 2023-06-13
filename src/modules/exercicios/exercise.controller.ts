import { Controller, Get, Post, Query, Render, Req, Res, UseGuards, Body } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response, Request } from "express";
import AuthGuard from "src/guards/auth.guard";
import { Repository } from "typeorm";
import { MuscleGroup } from "../muscles/MuscleGroup.entity";
import { MusclePortion } from "../muscles/MusclePortion.entity";
import { QueryExerciseDto } from "./exercise.dto";
import ListExerciseService from "./services/listExercises.service";

@Controller("exercise")
export default class ExerciseControler {

    constructor(
        private readonly ListExerciseService: ListExerciseService,
        @InjectRepository(MuscleGroup) private readonly muscleGroupRepository: Repository<MuscleGroup>,
        @InjectRepository(MusclePortion) private readonly musclePortionRepository: Repository<MusclePortion>
    ){}

    @Get("search")
    @UseGuards(AuthGuard)
    async list(@Query() query:QueryExerciseDto) {        
        return await this.ListExerciseService.main(query)
    }

    @Get("")
    @UseGuards(AuthGuard)
    @Render("exercises/index")
    async index() {
        const muscles = await this.muscleGroupRepository.find({
            select:{ name:true, id:true }, relations: { musclePortions: true }
        })

        return {muscles} 
    }

    async articulationMovementsFromPortion() {

    }
}