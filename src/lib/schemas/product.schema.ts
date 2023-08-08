import { EStatus } from '@prisma/client';
import { z } from 'zod';

import { MAX_STRING_LENGTH_100, MAX_STRING_LENGTH_255, MAX_STRING_LENGTH_1000 } from '../constants';
import { validationNumbers, validationNumbersOptional } from './generic.schema';

export const ProductSchemaCreate = z
  .object({
    name: z.string().min(1, 'Is required').max(MAX_STRING_LENGTH_255),
    description: z.string().max(MAX_STRING_LENGTH_100).optional(),
    buyPrice: validationNumbersOptional,
    sellPrice: validationNumbers,
    status: z.nativeEnum(EStatus).optional().default(EStatus.ACTIVE),
    image: z.string().max(MAX_STRING_LENGTH_1000).optional().default('https://loremflickr.com/100/100'),
    idCategory: z.union([z.string(), z.number()]).transform((x) => Number(x)).pipe(z.number())
  })
  .strict();

export type ProductSchemaCreateInput = z.infer<typeof ProductSchemaCreate>;

export const ProductSchemaUpdate = z
  .object({
    name: z.string().max(MAX_STRING_LENGTH_255).optional(),
    description: z.string().max(MAX_STRING_LENGTH_100).optional(),
    buyPrice: validationNumbersOptional,
    sellPrice: validationNumbersOptional,
    status: z.nativeEnum(EStatus).optional(),
    image: z.string().max(MAX_STRING_LENGTH_1000).optional(),
    idCategory: z.union([z.string(), z.number()]).transform((x) => Number(x)).pipe(z.number()).optional(),
  })
  .strict();

export type ProductSchemaUpdateInput = z.infer<typeof ProductSchemaUpdate>;
