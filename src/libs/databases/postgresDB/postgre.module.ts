import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { ConfigData, ConfigModule, ConfigService } from '@configs';
import { Logger } from '../../common/logger/logger';
import { LoggerModule } from '../../common/logger/logger.module';
import { PostgresConfigError } from './postgre.errors';
import { PostgresConfig } from './postgre.interface';
import { DatabaseService } from './postgre.service';
@Module({})
export class PostgresModule {
  private static getConnectionOptions(config: ConfigService, dbconfig: PostgresConfig): TypeOrmModuleOptions {
    const dbdata: ConfigData = config.get();
    if (!dbdata) {
      throw new PostgresConfigError('Database config is missing');
    }
    const connectionOptions = PostgresModule.getConnectionOptionsPostgres(dbdata);
    return {
      ...connectionOptions,
      entities: dbconfig.entities,
      synchronize: false,
      logging: false,
    };
  }

  private static getConnectionOptionsPostgres(dbdata: ConfigData): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      url: dbdata.db?.url,
      ssl:
        process.env['NODE_ENV'] !== 'local' && process.env['NODE_ENV'] !== 'test'
          ? { rejectUnauthorized: false }
          : false,
    };
  }

  public static forRoot(dbconfig: PostgresConfig): DynamicModule {
    return {
      module: PostgresModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule, LoggerModule],
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          useFactory: (configService: ConfigService, logger: Logger) =>
            PostgresModule.getConnectionOptions(configService, dbconfig),
          inject: [ConfigService],
        }),
      ],
      controllers: [],
      providers: [DatabaseService],
      exports: [DatabaseService],
    };
  }
}
