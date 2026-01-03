// This endpoint has been removed
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect(new URL('/', 'https://amitdevx.tech'), 301);
}
