import type { CreateUserRequest } from '$lib/api/requests/user.request';
import type { UserResponse } from '$lib/api/responses/user.response';
import { prisma } from '$lib/api/prisma/config';
import type { IUserRepository } from '../interfaces/user.interface';

export class UserRepository implements IUserRepository {
	public async showByEmail(email: string): Promise<UserResponse | null> {
		return await prisma.user.findUnique({
			where: { email },
			select: {
				id: true,
				name: true,
				email: true,
				avatarUrl: true
			}
		});
	}

	public async store({ name, email }: CreateUserRequest, hash: string): Promise<UserResponse> {
		return await prisma.user.create({
			data: { name, email, password: hash },
			select: {
				id: true,
				name: true,
				email: true,
				avatarUrl: true
			}
		});
	}
}
