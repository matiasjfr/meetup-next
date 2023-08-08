import { NextResponse } from 'next/server';

import { getPaginationAPI } from '@/lib/api';
import { getErrorResponse } from '@/lib/helpers';
import { prisma } from '@/lib/prisma';
import { ProductSchemaCreate } from '@/lib/schemas/product.schema';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const [limit, page] = getPaginationAPI(searchParams.get('limit'), searchParams.get('page'));

  // @ts-ignore
  const [products, meta] = await prisma.product.paginate({
      include: { category: !!searchParams.get('category') },
      orderBy: { id: 'desc' },
    })
    .withPages({
      limit,
      page,
      includePageCount: true,
    });

  return NextResponse.json(
    { results: products, pagination: { ...meta, limit } },
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}

export async function POST(request: Request) {
  try {
    const json = await request.json();

    const data = ProductSchemaCreate.parse(json);

    const createdProduct = await prisma.product.create({
      data: data,
    });

    return new NextResponse(JSON.stringify(createdProduct), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return getErrorResponse(error);
  }
}
