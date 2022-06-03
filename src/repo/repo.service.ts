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
    return await this.repoRepository.find({
      select: {
        id: true,
        issues: true,
      },
      take: 10,
    });
  }
}
