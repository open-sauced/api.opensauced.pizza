import {Controller, Get, HttpCode, HttpStatus, Query} from '@nestjs/common';
import { RepoService } from './repo.service';
import { Repo } from './repo.entity';
import {ApiTags} from "@nestjs/swagger";
import {PageOptionsDto} from "../common/dtos/page-options.dto";
import {PageDto} from "../common/dtos/page.dto";
import {ApiPaginatedResponse} from "../common/decorators/api-paginated-response.decorator";

@Controller('repos')
@ApiTags('Repositories')
export class RepoController {
  constructor(private readonly repoService: RepoService) {}

  @Get('/list')
  @HttpCode(HttpStatus.OK)
  @ApiPaginatedResponse(Repo)
  findUserList(
    @Query() pageOptionsDto: PageOptionsDto
  ): Promise<PageDto<Repo>> {
    return this.repoService.findAll(pageOptionsDto);
  }
}
