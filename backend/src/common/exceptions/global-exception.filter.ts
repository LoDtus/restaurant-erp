import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException,
	HttpStatus,
	Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { BusinessException } from '../exceptions/business.exception';
import { NotFoundException } from '../exceptions/not-found.exception';
import { ErrorCode } from '../constants/error-code.constant';
import { ApiResponseDto } from 'src/dtos/api-response.dto';
import { NODE_ENV } from '../constants/constants';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
	private readonly logger = new Logger(GlobalExceptionFilter.name);

	catch(exception: unknown, host: ArgumentsHost): void {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();

		let statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR;
		let errorCode: string = ErrorCode.INTERNAL_ERROR;
		let message: string = 'Đã có lỗi hệ thống xảy ra';
		let data: any = null;

		if (exception instanceof NotFoundException) {
			statusCode = HttpStatus.NOT_FOUND;
			errorCode = exception.errorCode;
			message = exception.message;
		} else if (exception instanceof BusinessException) {
			statusCode = HttpStatus.BAD_REQUEST;
			errorCode = exception.errorCode;
			message = exception.message;
		} else if (exception instanceof HttpException) {
			statusCode = exception.getStatus();
			const res = exception.getResponse() as any;

			if (typeof res === 'object' && res !== null) {
				errorCode = res.errorCode || errorCode;
				message = res.message || exception.message;
				data = res.details || res.data || null;
			} else {
				message = res || exception.message;
			}
		} else {
			// Lỗi không mong muốn
			this.logger.error(
				`${request.method} ${request.url}`,
				(exception as any)?.stack,
				{
					userId: (request as any).user?.id,
					body: request.body,
					params: request.params,
					query: request.query,
				},
			);

			if (NODE_ENV !== 'production') {
				message = (exception as Error)?.message || message;
			}
		}

		const apiResponse = new ApiResponseDto({
			statusCode,
			errorCode,
			message,
			data,
			timestamp: new Date(),
		});

		response.status(statusCode).json(apiResponse);
	}
}
