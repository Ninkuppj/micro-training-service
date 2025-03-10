export class ResponseObject<T> {
  success?: boolean;

  data?: T;

  message?: string;

  static success<T>(data?: T): ResponseObject<T> {
    return {
      success: true,
      data,
      message: undefined,
    };
  }

  static fail<T>(data: T, message: string): ResponseObject<T> {
    return {
      success: false,
      data,
      message,
    };
  }
}
