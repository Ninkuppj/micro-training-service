import { ConfigData } from './config.interface';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

export const DEFAULT_CONFIG: ConfigData = {
  port: Number(process.env['PORT'] || 5000),
  env: 'development',
  // connect to the database
  db: {
    url: process.env['DATABASE_URL'],
  },
  // get the token
  auth: {
    expiresIn: 30000,
    access_token_secret: '',
    refresh_token_secret: '',
  },
  // connect to the user service GRPC server
  userServiceGRPC: {
    name: 'USERSERVICE',
    options: {
      package: process.env['PACKAGE_NAME'] || 'USER', // default host to connect to the user service
      protoPath: process.env['PROTO_PATH'] || join(__dirname, '/protos/user.proto'), // default port to connect to the user service
      url:  process.env['HOST'] || '0.0.0.0' + ':' + process.env['PORT'] || '5001',
    },
    transport: Transport.GRPC,
  },
  // connect to the notification service by TCP
  userService: {
    options: {
      host: process.env['HOST'] || '0.0.0.0',
      port: Number(process.env['PORT']) || 5001,
    },
    transport: Transport.TCP,
  },
  // connect to the notification service by Kafka server
  notificationService: {
    name: '',
    options: {
      client: {
        brokers: ['0.0.0.0:29092'],
        clientId: '',
      },
      consumer: {
        groupId: '',
      },
    },
    transport: Transport.KAFKA,
  },
  // connect to the notification service by TCP
  notificationServiceTCP: {
    options: {
      host: process.env['HOST'] || '0.0.0.0',
      port: 3002,
    },
    transport: Transport.GRPC,
  },
  // connect to the auth service
  authService: {
    options: {
      host: process.env['HOST'] || '0.0.0.0',
      port: 3004,
    },
    transport: Transport.TCP,
  },
  // connect to the user service GRPC server
  authServiceGRPC: {
    name: 'USERSERVICE',
    options: {
      package: process.env['PACKAGE_NAME'] || 'auth', // default host to connect to the user service
      protoPath: process.env['PROTO_PATH'] || join(__dirname, '/protos/auth.proto'), // default port to connect to the user service
      url:  process.env['HOST'] || '0.0.0.0' + ':' + process.env['PORT'] || '5002',
    },
    transport: Transport.GRPC,
  },
  // connect to the cource service
  courseService: {
    options: {
      host: process.env['HOST'] || '0.0.0.0',
      port: 3003,
    },
    transport: Transport.GRPC,
  },
  // connect to the exam service
  examService: {
    options: {
      host: process.env['HOST'] || '0.0.0.0',
      port: 3003,
    },
    transport: Transport.GRPC,
  },
  // connect to the blog service
  blogService: {
    options: {
      host: process.env['HOST'] || '0.0.0.0',
      port: 3005,
    },
    transport: Transport.GRPC,
  },
  // set up info  to communicate service to service
  authorization: {
    baseUrl: '',
    serviceClientToken: '',
  },
  // set up info  to integrate with the third party
  platformApis: {
    baseUrl: '',
    token: '',
  },
  // set up info log level
  logLevel: process.env.LOG_LEVEL || 'info',
  // set up info with key Relic web
  newRelicKey: process.env.NEW_RELIC_KEY,
};
