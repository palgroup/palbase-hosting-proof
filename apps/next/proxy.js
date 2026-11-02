import { NextResponse } from 'next/server';

// Each request the server answers, in its log: which visitor keeps a
// machine that sleeps when idle awake.
export function proxy(request) {
  console.log(JSON.stringify({ at: new Date().toISOString(), host: request.headers.get('host'), path: request.nextUrl.pathname, ua: request.headers.get('user-agent') }));
  return NextResponse.next();
}
