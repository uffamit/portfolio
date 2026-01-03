// This file has been removed - image is available at /images/amit-divekar.jpg
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect(new URL('/images/amit-divekar.jpg', 'https://amitdevx.tech'), 301);
}
