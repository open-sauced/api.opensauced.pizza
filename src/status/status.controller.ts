import {DataSource, getConnection} from 'typeorm';
import { Controller, Get } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { StatusService } from "./status.service";

@ApiTags('status')
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get('/ping')
  @ApiOperation({ summary: 'Get status' })
  @ApiResponse({
    status: 200,
    description: 'Status can be correctly monitored',
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
  })
  ping() {
    return this.statusService.pingDb();
  }
}
