import type { CreateUserRequest } from '$lib/api/requests/user.request';
import type { UserResponse } from '$lib/api/responses/user.response';

export interface IUserRepository {
	store(data: CreateUserRequest, hash: string): Promise<UserResponse>;
	showByEmail(email: string): Promise<UserResponse | null>;
}
