import { EStatus } from '@prisma/client';
import { z } from 'zod';

import { MAX_STRING_LENGTH_100, MAX_STRING_LENGTH_255, MAX_STRING_LENGTH_1000 } from '../constants';

export const ProductSchemaCreate = z
  .object({
    name: z.string().max(MAX_STRING_LENGTH_255),
    description: z.string().max(MAX_STRING_LENGTH_100).optional(),
    buyPrice: z.number().optional(),
    sellPrice: z.number(),
    status: z.nativeEnum(EStatus).optional().default(EStatus.ACTIVE),
    image: z.string().max(MAX_STRING_LENGTH_1000).optional(),
    brandName: z.string().max(MAX_STRING_LENGTH_255).optional(),
    idCategory: z.number(),
  })
  .strict();

export type ProductSchemaCreateInput = z.infer<typeof ProductSchemaCreate>;

export const ProductSchemaUpdate = z
  .object({
    name: z.string().max(MAX_STRING_LENGTH_255).optional(),
    description: z.string().max(MAX_STRING_LENGTH_100).optional(),
    buyPrice: z.number().optional(),
    sellPrice: z.number().optional(),
    status: z.nativeEnum(EStatus).optional(),
    image: z.string().max(MAX_STRING_LENGTH_1000).optional(),
    brandName: z.string().max(MAX_STRING_LENGTH_255).optional(),
    idCategory: z.number().optional(),
  })
  .strict();

export type ProductSchemaUpdateInput = z.infer<typeof ProductSchemaUpdate>;
