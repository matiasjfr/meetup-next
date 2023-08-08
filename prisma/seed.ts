import { PrismaClient } from '@prisma/client';

import { isProduction } from '../src/lib/utils';
import { fakeProductArray } from './fakers/fakeProduct';
import { fakeProductCategory } from './fakers/fakeProductCategory';

const prisma = new PrismaClient();

export const LIMIT_SEED = 3;

async function main() {
  if (isProduction()) {
    return;
  }

  console.log(``);
  console.log(`🌱🌱🌱🌱 Start seeding 🌱🌱🌱🌱`);
  console.log(``);

  console.log(`🌱 Seeding Product Categories`);
  for (let index = 1; index <= LIMIT_SEED; index++) {
    await prisma.productCategory.create({
      data: fakeProductCategory(),
    });
  }

  console.log(`🌱 Seeding Products`);
  await prisma.product.createMany({
    data: fakeProductArray(LIMIT_SEED * 2),
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
