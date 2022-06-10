import {Controller, Get, HttpCode, HttpStatus} from '@nestjs/common';
import { RepoService } from './repo.service';
import type { Repo } from './repo.entity';
import {ApiTags} from "@nestjs/swagger";

@Controller('repos')
@ApiTags('Repositories')
export class RepoController {
  constructor(private readonly repoService: RepoService) {}

  @Get('/list')
  @HttpCode(HttpStatus.OK)
  findUserList(): Promise<Repo[]> {
    return this.repoService.findAll();
  }
}
