'use client';

import { useEffect } from 'react';
import Link from 'next/link';

import { isProduction } from '@/lib/utils';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    !isProduction() && console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <div>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
      o
      <div>
        <Link href="/">Back</Link>
      </div>
    </div>
  );
}
