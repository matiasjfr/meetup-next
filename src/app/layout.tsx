import { Inter } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';

import './globals.css';

import Nav from './nav';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <Nav />
          <div className="container">{children}</div>
        </body>
      </UserProvider>
    </html>
  );
}
