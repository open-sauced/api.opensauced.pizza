import { Controller, Get } from '@nestjs/common';
import { RepoService } from './repo.service';
import type { Repo } from './repo.entity';

@Controller('repo')
export class RepoController {
  constructor(private readonly repoService: RepoService) {}

  @Get('/list')
  findUserList(): Promise<Repo[]> {
    return this.repoService.findAll();
  }
}
