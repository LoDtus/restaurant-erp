import {
	Injectable,
	NestInterceptor,
	ExecutionContext,
	CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponseDto } from 'src/dtos/api-response.dto';

@Injectable()
export class WrapResponseInterceptor<T> implements NestInterceptor<
	T,
	ApiResponseDto<T>
> {
	intercept(
		context: ExecutionContext,
		next: CallHandler,
	): Observable<ApiResponseDto<T>> {
		return next.handle().pipe(
			map((data) => {
				// Nếu controller đã trả về ApiResponseDto rồi thì không wrap nữa
				if (data instanceof ApiResponseDto) {
					return data;
				}

				// Xử lý trường hợp data là object có total của pagination
				let total: number | undefined;
				let payload = data;

				if (
					data &&
					typeof data === 'object' &&
					'total' in data &&
					'data' in data
				) {
					total = data.total;
					payload = data.data;
				} else if (Array.isArray(data)) {
					total = data.length;
				}

				return new ApiResponseDto({
					statusCode: context.switchToHttp().getResponse().statusCode,
					message: 'Successful',
					total,
					data: payload,
				});
			}),
		);
	}
};