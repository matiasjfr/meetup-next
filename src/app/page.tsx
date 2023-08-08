'use client';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}!!
        <div>
        <a href="/api/auth/logout">Logout</a>
        </div>
      </div>
    );
  }

  return null;
}