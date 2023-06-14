import { Controller, Get, Post, Query, Render, Req, Res, UseGuards, Body } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response, Request } from "express";
import { ArticulationMovement } from "src/entitys/ArticulationMovement.entity";
import { ArticulationMovementPortion } from "src/entitys/ArticulationMovementMusclePortion.entity";
import AuthGuard from "src/guards/auth.guard";
import { Repository } from "typeorm";
import { Articulation } from "../articulation/Articulations.entity";
import { Movements } from "../movements/Movements.entity";
import { MuscleGroup } from "../muscles/MuscleGroup.entity";
import { MusclePortion } from "../muscles/MusclePortion.entity";
import { QueryExerciseDto } from "./exercise.dto";
import ListExerciseService from "./services/listExercises.service";

@Controller("exercise")
export default class ExerciseControler {

    constructor(
        private readonly ListExerciseService: ListExerciseService,
        @InjectRepository(MuscleGroup) private readonly muscleGroupRepository: Repository<MuscleGroup>,
        @InjectRepository(MusclePortion) private readonly musclePortionRepository: Repository<MusclePortion>,
        @InjectRepository(Articulation) private readonly articulationRepository:Repository<Articulation>,
        @InjectRepository(Movements) private readonly movementsRepository:Repository<Movements>,
        @InjectRepository(ArticulationMovement) private readonly articulationMovementRepository:Repository<ArticulationMovement>,
        @InjectRepository(ArticulationMovementPortion) private readonly articulationMovementPortionRepository:Repository<ArticulationMovementPortion>,
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
        const [
            muscles, 
            portions, 
            articulations, 
            movements,
            articulationMovementMuscle
        ] = await Promise.all([
            this.muscleGroupRepository.find({
                select: { id:true, name:true }
            }),
            this.musclePortionRepository.find({
                select: { id:true, name:true, muscleGroupId:true }
            }),
            this.articulationRepository.find({
                select: { id:true, name:true }
            }),
            this.movementsRepository.find({
                select: { id:true, name:true }
            }),
            this.articulationMovementPortionRepository.find({
                select: {articulation_id:true, muscle_portion_id:true, movement_id:true, id:true}
            })
        ])

        return { muscles, portions, articulations, movements, articulationMovementMuscle }
    }
}