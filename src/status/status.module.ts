import { Module } from '@nestjs/common';

import { StatusService } from './status.service';
import { StatusController } from './status.controller';

@Module({
  imports: [],
  controllers: [StatusController],
  providers: [StatusService],
  exports: [StatusService],
})
export class StatusModule {}
