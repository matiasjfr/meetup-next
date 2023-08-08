import { NextResponse } from 'next/server';

import { getErrorResponse } from '@/lib/helpers';
import { prisma } from '@/lib/prisma';
import { ProductSchemaUpdate } from '@/lib/schemas/product.schema';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id ?? null;

    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    });

    if (!product) {
      return getErrorResponse(Error(`Error get product with id ${id}`), 404);
    }

    return NextResponse.json(product);
  } catch (error: any) {
    return getErrorResponse(error);
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const json = await request.json();

    const data = ProductSchemaUpdate.parse(json);

    const updatedProduct = await prisma.product.update({
      where: { id: Number(id) },
      data,
    });

    return new NextResponse(JSON.stringify(updatedProduct), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return getErrorResponse(error);
  }
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    await prisma.product.delete({
      where: { id: Number(id) },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    return getErrorResponse(error);
  }
}
