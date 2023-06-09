import { Controller, Get, Post, Query, Render, Req, Res, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response, Request } from "express";
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
        @InjectRepository(MuscleGroup) private readonly muscleGroupRepository:Repository<MuscleGroup>,
        @InjectRepository(MusclePortion) private readonly musclePortionRepository:Repository<MusclePortion>,
        @InjectRepository(Articulation) private readonly articulationRepository:Repository<Articulation>,
        @InjectRepository(Movements) private readonly movmentsRepository:Repository<Movements>,
    ){}

    @Get("search")
    @UseGuards(AuthGuard)
    async list(@Query() query:QueryExerciseDto) {        
        return await this.ListExerciseService.main(query)
    }

    @Get("")
    @UseGuards(AuthGuard)
    @Render('exercises/index')
    async index(@Res() res: Response, @Req() req: Request) {
        const {accessToken, refreshToken} = req.cookies
        const [muscleGroups, articulations] = await Promise.all([
            this.muscleGroupRepository.find({
                relations:{
                    musclePortions: true
                },
                select: {
                    id: true,
                    name: true,
                }
            }),
            this.articulationRepository.find({
                select:{
                    id: true,
                    name: true
                },
                relations: {
                    movements: true
                }
            })
        ])

        return {muscleGroups, articulations}
    }

    @UseGuards(AuthGuard)
    @Post("articulation-movements")
    async articulationsMovements(@Res() res: Response, @Req() req: Request) {
        
    }
}