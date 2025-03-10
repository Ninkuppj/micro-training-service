import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

import { SWAGGER_CONFIG } from './swagger.config';
import { SwaggerConfig } from './swagger.interface';

/**
 * Creates an OpenAPI document for an application, via swagger.
 * @param app the nestjs application
 * @returns the OpenAPI document
 */
export function swaggerDocument(app: INestApplication, optionModule: SwaggerConfig): OpenAPIObject {
  const builder = new DocumentBuilder()
    .setTitle(optionModule.title || SWAGGER_CONFIG.title)
    .setDescription(optionModule.description || SWAGGER_CONFIG.description)
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token')
    .setVersion(optionModule.version || SWAGGER_CONFIG.version);
  for (const tag of optionModule.tags || SWAGGER_CONFIG.tags) {
    builder.addTag(tag);
  }
  const options = builder.build();

  return SwaggerModule.createDocument(app, options);
}
