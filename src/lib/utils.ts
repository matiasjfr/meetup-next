import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isProduction = () => (process.env.NODE_ENV === 'production' ? true : false);

export const truncateString = (str: string | null, num: number) => {
  if (!str) return '';

  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
};

export const isEmpty = (value: string | null | undefined) => {
  return value == null || value.trim() === '';
};

export const stringToNumber = (value: string | null | undefined) => {
  // if (isEmpty(value)) return '111';
  if (isNaN(Number(value))) return value;

  return Number(value);
};
