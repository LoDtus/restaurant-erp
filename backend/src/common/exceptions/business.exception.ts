export class BusinessException extends Error {
	constructor(
		public readonly message: string,
		public readonly errorCode: string,
		public readonly cause?: unknown,
	) {
		super(message);
		this.name = 'BusinessException';
	}
};
