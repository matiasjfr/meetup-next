import { PrismaClient } from '@prisma/client';
import { paginate } from 'prisma-extension-pagination';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'production' ? ['error'] : ['query', 'error', 'warn', 'info'],
  }).$extends({
    model: {
      product: { paginate },
      productCategory: { paginate },
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma;
