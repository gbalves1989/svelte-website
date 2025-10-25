import { HttpException } from './http.exception';

export function handleException(error: unknown): Response {
	if (error instanceof HttpException) {
		return new Response(
			JSON.stringify({
				status: error.status,
				message: error.message,
				details: error.details ?? null
			}),
			{
				status: error.status,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}

	return new Response(
		JSON.stringify({
			status: 500,
			message: 'Internal Server Error'
		}),
		{
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		}
	);
}
