export class NotFoundException extends Error {
	public readonly errorCode = 'NOT_FOUND';

	constructor(message = 'Not found object(s)') {
		super(message);
		this.name = 'NotFoundException';
	};
};