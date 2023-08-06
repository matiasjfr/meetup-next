import { PrismaClient } from '@prisma/client';
// Missing types for prisma-extension-pagination
// @ts-ignore-next-line
import pagination from 'prisma-extension-pagination';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'production' ? ['error'] : ['query', 'error', 'warn', 'info'],
  }).$extends(pagination);

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma;
