import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';

import { Repo } from './repo.entity';

@Injectable()
export class RepoService {
  constructor(
    @InjectRepository(Repo)
    private repoRepository: Repository<Repo>,
  ) {}

  async findAll(): Promise<Repo[]> {
    const builder = await this.repoRepository.createQueryBuilder('repo')
      // .select(['repo.id'])
      .addSelect(`(SELECT COUNT(DISTINCT user_id) from users_to_repos_stars where repo_id = repo.id)`, 'starsCount')
      .addSelect(`(SELECT COUNT(DISTINCT user_id) from users_to_repos_votes where repo_id = repo.id)`, 'votesCount')
      .limit(10);

    // console.log(builder.getSql());

    return builder
      .getRawMany();

    // return await this.repoRepository.find({
    //   select: {
    //     id: true,
    //     issues: true,
    //   },
    //   relations: [],
    //   take: 10,
    // });
  }
}
