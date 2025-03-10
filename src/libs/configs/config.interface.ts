export interface UserServiceConfig {
  options: UserServiceConfigOptions;
  transport?: any;
}

export interface AuthConfig {
  expiresIn: number;
  access_token_secret: string;
  refresh_token_secret: string;
}

export interface UserServiceConfigOptions {
  host: string;
  port: number;
}

export interface KafkaConfig {
  options: KafaConfigOptions;
  transport: any;
  name: string;
}

export interface KafaConfigOptions {
  client: {
    clientId?: string;
    brokers: any;
  };
  consumer: {
    groupId: string;
  };
}

export interface gRPCConfig {
  options: gRPCConfigOptions;
  transport: any;
  name: string;
}

export interface gRPCConfigOptions {
  package: string;
  protoPath: string;
  url: string;
}

export interface SwaggerConfig {
  enabled: boolean;
  title: string;
  description: string;
  version: string;
  path: string;
}

export interface ConfigDatabase {
  url?: string;
}

export interface GraphqlConfig {
  playgroundEnabled: boolean;
  debug: boolean;
  schemaDestination: string;
  sortSchema: boolean;
}

export interface ConfigAuthorizationData {
  baseUrl: string;
  serviceClientToken: string;
}

export interface PlatformAPIs {
  baseUrl: string;
  token: string;
}

export interface ConfigData {
  env: string;

  port: number;

  db?: ConfigDatabase;

  swagger?: SwaggerConfig;

  logLevel?: string;

  graphql?: GraphqlConfig;

  notificationService?: KafkaConfig;

  notificationServiceTCP?: UserServiceConfig;

  auth: AuthConfig;

  userServiceGRPC?: gRPCConfig;
  
  authServiceGRPC?:gRPCConfig;

  userService?: UserServiceConfig;

  authService?: UserServiceConfig;

  courseService?: UserServiceConfig;

  blogService?: UserServiceConfig;

  examService?: UserServiceConfig;

  tokenService?: UserServiceConfig;

  authorization?: ConfigAuthorizationData;

  platformApis?: PlatformAPIs;

  /** The New Relic key to use. */
  newRelicKey?: string;
}
