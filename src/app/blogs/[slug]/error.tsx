'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function BlogError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error('[Blog Error]', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold">Blog Post Not Found</h2>
          <p className="text-muted-foreground">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Link href="/blogs">
            <Button variant="default">View All Blogs</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
