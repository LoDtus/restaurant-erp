import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
} from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { map } from 'rxjs/operators';

@Injectable()
export class UtcDateInterceptor implements NestInterceptor {
	intercept(_: ExecutionContext, next: CallHandler) {
		return next
			.handle()
			.pipe(map((data) => this.convert(data)));
	}

	private convert(value: any): any {
		if (value instanceof Date) {
			return value.toISOString();
		}

		if (value instanceof ObjectId) {
			return value.toHexString();
		}

		if (Array.isArray(value)) {
			return value.map((v) => this.convert(v));
		}

		if (value !== null && typeof value === 'object') {
			return Object.fromEntries(
				Object.entries(value).map(([k, v]) => [
					k,
					this.convert(v),
				]),
			);
		}

		return value;
	}
};