import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ApiResponseDto<T> {
	@Expose()
	statusCode: number = 200;

	@Expose()
	errorCode?: string;

	@Expose()
	message?: string;

	@Expose()
	timestamp: Date = new Date();

	@Expose()
	total?: number;

	@Expose()
	data?: T;

	constructor(partial: Partial<ApiResponseDto<T>>) {
		Object.assign(this, partial);
	}
}