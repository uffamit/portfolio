// Image sitemap removed - using main sitemap only
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect(new URL('/sitemap.xml', 'https://amitdevx.tech'), 301);
}
