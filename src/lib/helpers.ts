import { NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
import { ZodError } from 'zod';

const getPrismaError = (errors: any) => {
  let messagePrisma: string;
  let statusPrisma: number;

  switch (errors?.code) {
    case 'P2002':
      messagePrisma = `${errors?.meta?.target.toString()} already exists`;
      statusPrisma = 409;
      break;
    case 'P2003':
      messagePrisma = `Foreign key constraint failed on the field: ${errors?.meta?.field_name}`;
      statusPrisma = 409;
      break;
    case 'P2025':
      messagePrisma = errors?.meta?.cause;
      statusPrisma = 404;
      break;
    default:
      messagePrisma = `Unknown error Prisma, with errorcode: ${errors?.code}`;
      statusPrisma = 400;
      break;
  }
  return { messagePrisma, statusPrisma };
};

export function getErrorResponse(
  errors: ZodError | Prisma.PrismaClientKnownRequestError | Error,
  status: number = 500
) {
  if (errors instanceof ZodError) {
    return new NextResponse(
      JSON.stringify({
        status: 'fail',
        message: 'Failed validations',
        errors: errors ? errors.flatten() : null,
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } else if (errors instanceof Prisma.PrismaClientKnownRequestError) {
    const { messagePrisma, statusPrisma } = getPrismaError(errors);
    return new NextResponse(
      JSON.stringify({
        status: 'fail',
        message: messagePrisma,
      }),
      {
        status: statusPrisma,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  return new NextResponse(
    JSON.stringify({
      status: status < 500 ? 'fail' : 'error',
      message: errors?.message || 'Unknown error',
    }),
    {
      status: status,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
