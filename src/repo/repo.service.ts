import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';

import { Repo } from './repo.entity';
import {PageOptionsDto} from "../common/dtos/page-options.dto";
import {PageMetaDto} from "../common/dtos/page-meta.dto";
import {PageDto} from "../common/dtos/page.dto";

@Injectable()
export class RepoService {
  constructor(
    @InjectRepository(Repo)
    private repoRepository: Repository<Repo>,
  ) {}

  async findAll(
    pageOptionsDto: PageOptionsDto
  ): Promise<PageDto<Repo>> {
    const builder = await this.repoRepository.createQueryBuilder('repo')
      // .select(['repo.id'])
      .leftJoinAndSelect("repo.user", "user")
      .leftJoinAndSelect("repo.contributions", "contributions")
      .loadRelationCountAndMap("repo.votesCount", "repo.repoToUserVotes")
      // .addSelect(`(SELECT COUNT(DISTINCT user_id) from users_to_repos_stars where repo_id = repo.id)`, 'starsCount')
      .orderBy("repo.pushed_at", pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    // console.log(builder.getSql());

    const itemCount = await builder.getCount();
    const entities = await builder.getMany();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }
}
