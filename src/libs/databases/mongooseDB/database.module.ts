import { Module, DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@configs';
import { DbConfigError } from './database.error';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';

@Module({})
export class MongoDBModule {
  private static getNoSqlConnectionOptions(config: ConfigService): MongooseModuleOptions {
    const dbdata = config.get().db?.url;

    if (!dbdata) {
      throw new DbConfigError('Database config is missing');
    }
    return {
      uri: dbdata,
    };
  }

  public static forRoot(): DynamicModule {
    return {
      module: MongoDBModule,
      imports: [
        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) => MongoDBModule.getNoSqlConnectionOptions(configService),
          inject: [ConfigService],
        }),
      ],
      controllers: [],
      providers: [],
      exports: [],
    };
  }
}
