import { EStatus } from '@prisma/client';
import { z } from 'zod';

import { MAX_STRING_LENGTH_100, MAX_STRING_LENGTH_255 } from '../constants';

export const ProductCategorySchemaCreate = z
  .object({
    name: z.string().max(MAX_STRING_LENGTH_255),
    description: z.string().max(MAX_STRING_LENGTH_100).optional(),
    status: z.nativeEnum(EStatus).optional().default(EStatus.ACTIVE),
  })
  .strict();

export type ProductCategorySchemaCreateInput = z.infer<typeof ProductCategorySchemaCreate>;

export const ProductCategorySchemaUpdate = z
  .object({
    name: z.string().max(MAX_STRING_LENGTH_255).optional(),
    description: z.string().max(MAX_STRING_LENGTH_100).optional(),
    status: z.nativeEnum(EStatus).optional(),
  })
  .strict();

export type ProductCategorySchemaUpdateInput = z.infer<typeof ProductCategorySchemaUpdate>;
