import { Body, Controller, Get, Header, HttpCode, Query, Render, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ArticulationMovement } from "src/entitys/ArticulationMovement.entity";
import { ArticulationMovementPortion } from "src/entitys/ArticulationMovementMusclePortion.entity";
import AuthGuard from "src/guards/auth.guard";
import { Repository } from "typeorm";
import { Articulation } from "../articulation/Articulations.entity";
import { Movements } from "../movements/Movements.entity";
import { QueryMuscleGroupDto, QueryMusclePortionDto } from "./muscle.validator";
import { MuscleGroup } from "./MuscleGroup.entity";
import { MusclePortion } from "./MusclePortion.entity";
import ListMuscleGroupService from "./services/listMuscleGroups.service";
import ListMusclePortionService from "./services/listMusclePortion.service";

@Controller("muscle")
export default class MuscleController {

    constructor(
        private ListMuscleGroupsService: ListMuscleGroupService,
        private ListMusclePortionService: ListMusclePortionService,
        @InjectRepository(MuscleGroup) private readonly muscleGroupRepository:Repository<MuscleGroup>,
        @InjectRepository(MusclePortion) private readonly musclePortionRepository:Repository<MusclePortion>,
        @InjectRepository(Articulation) private readonly articulationRepository:Repository<Articulation>,
        @InjectRepository(Movements) private readonly movmentsRepository:Repository<Movements>,
        @InjectRepository(ArticulationMovement) private readonly articulationMovementRepository:Repository<ArticulationMovement>,
        @InjectRepository(ArticulationMovementPortion) private readonly articulationMovementPortionRepository:Repository<ArticulationMovementPortion>,
    ){}

    @Get('/group')
    @HttpCode(200)
    @UseGuards(AuthGuard)
    @Header('Content-Type', 'application/json')
    async listGroup(
        @Query() query:QueryMuscleGroupDto
    ){
        const groups = await this.ListMuscleGroupsService.main(query)
        return {
            groups  
        }
    }

    @Get('/portion')
    @HttpCode(200)
    @UseGuards(AuthGuard)
    @Header('Content-Type', 'application/json')
    async listPortion(
        @Query() query:QueryMusclePortionDto
    ){
        const portions = await this.ListMusclePortionService.main(query)

        return {
            portions
        }
    }

    @Get('')
    @Render('muscles/index')
    async index() {

    }
}