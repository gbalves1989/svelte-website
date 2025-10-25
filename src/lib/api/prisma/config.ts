import { PrismaClient } from '@prisma/client';
import { NODE_ENV } from '$lib/api/constants/variables';

let prisma: PrismaClient;

if (NODE_ENV === 'production') {
	prisma = new PrismaClient();
}

export { prisma };
