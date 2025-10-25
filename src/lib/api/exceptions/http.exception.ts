export class HttpException extends Error {
	status: number;
	details?: unknown;

	constructor(message: string, status: number = 500, details?: unknown) {
		super(message);

		this.status = status;
		this.details = details;
	}
}
