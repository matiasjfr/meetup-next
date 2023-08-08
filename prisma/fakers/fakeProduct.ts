import { faker } from '@faker-js/faker';
import { EStatus } from '@prisma/client';

import { ProductSchemaCreateInput } from '@/lib/schemas/product.schema';

import { LIMIT_SEED } from '../seed';

export const fakeProduct = () => {
  const product: ProductSchemaCreateInput = {
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    buyPrice: faker.commerce.price({ min: 1, max: 100, dec: 2 }),
    sellPrice: faker.commerce.price({ min: 100, max: 10000, dec: 2 }),
    status: faker.helpers.enumValue(EStatus),
    image: faker.image.url({ height: 100, width: 100 }),
    idCategory: faker.number.int({ min: 1, max: LIMIT_SEED }),
  };
  return product;
};

export const fakeProductArray = (qty: number) => {
  const products: ProductSchemaCreateInput[] = [];
  for (let i = 0; i < qty; i++) {
    products.push(fakeProduct());
  }
  return products;
};
