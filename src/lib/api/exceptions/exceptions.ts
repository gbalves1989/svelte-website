import { HttpException } from './http.exception';

export class BadRequestException extends HttpException {
	constructor(message = 'Bad Request', details?: unknown) {
		super(message, 400, details);
	}
}

export class UnauthorizedException extends HttpException {
	constructor(message = 'Unauthorized', details?: unknown) {
		super(message, 401, details);
	}
}

export class NotFoundException extends HttpException {
	constructor(message = 'Not Found', details?: unknown) {
		super(message, 404, details);
	}
}

export class ConflictException extends HttpException {
	constructor(message = 'Conflict', details?: unknown) {
		super(message, 409, details);
	}
}
