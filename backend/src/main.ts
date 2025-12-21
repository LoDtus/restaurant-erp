import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UtcDateInterceptor } from './common/interceptors/utc-date.interceptor';
import { WrapResponseInterceptor } from './common/interceptors/wrap-response.interceptor';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { GlobalExceptionFilter } from './common/exceptions/global-exception.filter';
import { PORT } from './common/constants/constants';

process.env.TZ = 'UTC';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const logger = new Logger('Bootstrap');

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transform: true,
			exceptionFactory: (validationErrors: ValidationError[] = []) => {
				const details = validationErrors.reduce(
					(acc, error) => {
						if (error.constraints) {
							acc[error.property] = Object.values(
								error.constraints,
							);
						}

						// Hỗ trợ nested validation, nếu dto có object lồng nhau
						if (error.children && error.children.length > 0) {
							error.children.forEach((child) => {
								if (child.constraints) {
									const key = `${error.property}.${child.property}`;
									acc[key] = Object.values(child.constraints);
								}
							});
						}

						return acc;
					},
					{} as Record<string, string[]>,
				);

				return new BadRequestException({
					errorCode: 'VALIDATION_ERROR',
					message: 'Invalid request',
					details,
				});
			},
		}),
	);

	app.setGlobalPrefix('v1');

	// Filter trước → bắt lỗi → Interceptor sau → wrap response
	app.useGlobalFilters(new GlobalExceptionFilter());
	app.useGlobalInterceptors(
		new UtcDateInterceptor(),
		new WrapResponseInterceptor(),
	);
	const port = PORT ?? 9101;
	await app.listen(port);
	logger.log(`Application is running on: http://localhost:${port}/v1`);
}
bootstrap();