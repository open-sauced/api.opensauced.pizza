import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface";

import { AppController } from './app.controller';
import { RepoModule } from './repo/repo.module';

import { Repo } from './repo/repo.entity';
import apiConfig from './config/api.config';
import dbConfig from './config/database.config';
import {StatusController} from "./status/status.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        apiConfig,
        dbConfig
      ],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => <TypeOrmModuleOptions>({
        type: configService.get('db.connection'),
        host: configService.get('db.host'),
        port: configService.get('db.port'),
        username: configService.get('db.username'),
        password: configService.get('db.password'),
        database: configService.get('db.database'),
        autoLoadEntities: false,
        entities: [
          Repo
        ],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    RepoModule,
  ],
  controllers: [
    AppController,
    StatusController
  ],
  providers: [],
})
export class AppModule {}
