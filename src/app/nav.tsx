'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Nav() {
  const { user } = useUser();
  const pathname = usePathname();
  const pageName = pathname?.split('/').pop();

  return (
    <>
      <div className={`header ${pageName || 'home'} secondary`}>
        <nav>
          <ul>
            <li>
              <Link href="/" legacyBehavior>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/profile" legacyBehavior>
                <a>Profile</a>
              </Link>
            </li>
            <li>
              <Link href="/meetup" legacyBehavior>
                <a>Meetup</a>
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <span className='mr-3'>
                  {user.name}
                  </span>
                  <a href="/api/auth/logout" data-testid="logout">
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/api/auth/login" data-testid="login">
                    Login
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}
