import { z } from 'zod';

export const validationNumbers = z
  .string({
    required_error: 'Expected number like string',
    invalid_type_error: 'Expected number like string',
  })
  .refine(
    (val) => {
      return val && !Number.isNaN(parseInt(val, 10)) && val && !Number.isNaN(Number(val));
    },
    {
      message: 'Expected number like string',
    }
  );

export const validationNumbersOptional = z
  .string({
    required_error: 'Expected number like string',
    invalid_type_error: 'Expected number like string',
  })
  .optional()
  .refine(
    (val) => {
      return val && !Number.isNaN(parseInt(val, 10)) && val && !Number.isNaN(Number(val));
    },
    {
      message: 'Expected number like string',
    }
  )
  .optional();
