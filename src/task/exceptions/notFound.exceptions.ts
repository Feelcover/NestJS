import { HttpException, HttpStatus } from '@nestjs/common';

interface Error {
    message?: never;
    error?:never;
    createdAt?: never;
    [key: string]: string;
}

export class NotFound extends HttpException {
  constructor(error:Error = null) {
    super(
        {
      message: 'Задача не была найдена',
      error: 'not_found_task_exception',
      createdAt: new Date(),
      ...error,
    },
    HttpStatus.NOT_FOUND,
    )
  }
}
