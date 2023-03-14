import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MuscleRepository } from './knex/muscleGroup.repository';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private MuscleRepository: MuscleRepository
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/muscles')
  async muscles() {
    return await this.MuscleRepository.findAll()
  }
}
