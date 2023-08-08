import { faker } from '@faker-js/faker';
import { EStatus } from '@prisma/client';

import { ProductCategorySchemaCreateInput } from '@/lib/schemas/productCategory.schema';

export const fakeProductCategory = () => {
  const productCategory: ProductCategorySchemaCreateInput = {
    name: faker.commerce.department(),
    description: faker.commerce.department(),
    status: faker.helpers.enumValue(EStatus),
  };

  return productCategory;
};

export const fakeProductCategoryArray = (qty: number) => {
  const productCategories: ProductCategorySchemaCreateInput[] = [];
  for (let i = 0; i < qty; i++) {
    productCategories.push(fakeProductCategory());
  }
  return productCategories;
};
