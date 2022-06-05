import { Injectable } from '@nestjs/common';
import {DataSource, Repository} from "typeorm";

@Injectable()
export class StatusService {
  constructor(private dataSource: DataSource) {}

  async pingDb() {
    const executionStart = Date.now();
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.query('SELECT 1');
    await queryRunner.release();

    return {
      dbLatency: Date.now() - executionStart,
      dbConnected: this.dataSource.isInitialized,
    };
  }
}
