import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { SERVER_ERROR_MESSAGE } from '@constants';
import { ResponseObject } from '../dto/response-object.dto';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    // const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    this.handleResponse(response, exception);
  }

  private handleResponse(response: Response, exception: unknown) {
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionMessage: any = exception instanceof HttpException ? exception.getResponse() : SERVER_ERROR_MESSAGE;

    const responseObject: ResponseObject<any> =
      exceptionMessage instanceof Object
        ? ResponseObject.fail(exceptionMessage, exceptionMessage.message || null)
        : ResponseObject.fail(null, exceptionMessage);

    response.status(status).json(responseObject);
  }
}
