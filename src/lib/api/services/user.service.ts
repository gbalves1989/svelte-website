import { ConflictException } from '../exceptions/exceptions';
import type { IUserRepository } from '../prisma/interfaces/user.interface';
import type { CreateUserRequest } from '../requests/user.request';
import type { UserResponse } from '../responses/user.response';
import { Hash } from '../utils/hash.util';

const hashUtil: Hash = new Hash();

export class UserService {
	constructor(private readonly userRepository: IUserRepository) {}

	public async store(data: CreateUserRequest): Promise<ApiResponse> {
		const userEmailEsxist: UserResponse | null = await this.userRepository.showByEmail(data.email);

		if (!userEmailEsxist) {
			throw new ConflictException('E-mail já cadastrado');
		}

		const hash = await hashUtil.hashPassword(data.password);
		const user: UserResponse = await this.userRepository.store(data, hash);

		return {
			message: 'Created',
			status: 201,
			success: true,
			data: user
		};
	}
}
