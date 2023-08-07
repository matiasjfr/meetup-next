import { NextResponse } from 'next/server';

import { getPaginationAPI } from '@/lib/api';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const [limit, page] = getPaginationAPI(searchParams.get('limit'), searchParams.get('page'));

  const [productCategories, meta] = await prisma.productCategory
    .paginate()
    .withPages({
      limit,
      page,
      includePageCount: true,
    });

  return NextResponse.json(
    { results: productCategories, pagination: { ...meta, limit } },
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
