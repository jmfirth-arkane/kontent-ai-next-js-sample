import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultLanguage } from './Utilities/LanguageCodes'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/')
  return NextResponse.redirect(new URL(`/${defaultLanguage}`, request.url))
}
