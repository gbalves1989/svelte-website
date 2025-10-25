import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from '../constants/variables';

export class Hash {
	public async hashPassword(password: string): Promise<string> {
		return bcrypt.hash(password, SALT_ROUNDS);
	}

	public async verifyPassword(password: string, hash: string): Promise<boolean> {
		return bcrypt.compare(password, hash);
	}
}
