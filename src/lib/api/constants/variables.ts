import dotenv from 'dotenv';

dotenv.config({
	path: process.env.NODE_ENV === 'production' ? 'env.production' : '.env.development'
});

const NODE_ENV = process.env.NODE_ENV;
const SECRET = process.env.JWT_SECRET ?? 'change_me';
const EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? '7d';
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS ?? 10);

export { NODE_ENV, SECRET, EXPIRES_IN, SALT_ROUNDS };
