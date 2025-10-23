import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

let prisma: PrismaClient;

dotenv.config({
  path: process.env.NODE_ENV === "production" ? "env.production" : ".env.development"
})

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient({
      log: ['query', 'warn', 'error'],
    });
  }

  prisma = (global as any).prisma;
}

export { prisma };
