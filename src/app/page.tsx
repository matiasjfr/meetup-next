import { Prisma, Product, ProductCategory } from '@prisma/client';

import { GetAllResponse } from '@/types/global';
import { CardWithForm } from '@/components/custom/CardWithForm';
import { TableDemo } from '@/components/custom/TableDemo';

async function getProducts() {
  const res = await fetch(`http://localhost:3000/api/v1/products?category=true`, { cache: 'no-cache' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const productsResponse: GetAllResponse<Prisma.ProductGetPayload<{ include: { category: true } }>> =
    await res.json();

  return productsResponse;
}

async function getProductCategories() {
  const res = await fetch(`http://localhost:3000/api/v1/productCategories`, { cache: 'no-cache' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const productsResponse: GetAllResponse<ProductCategory> = await res.json();

  return productsResponse;
}

export default async function Home() {
  const productsResponse = await getProducts();
  const productCategoriesResponse = await getProductCategories();
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <div>
        <CardWithForm
          productCategories={productCategoriesResponse.results}
        />
      </div>
      <div>
        <TableDemo products={productsResponse.results} />
      </div>
    </main>
  );
}
