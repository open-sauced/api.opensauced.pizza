import { getConnection } from 'typeorm';
import { Controller, Get } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('status')
@Controller('status')
export class StatusController {
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
  async ping(): Promise<object> {
    const con = await getConnection('relational');
    return {
      dbConnection: con.isConnected,
    };
  }
}
