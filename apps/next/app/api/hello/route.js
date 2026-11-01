export const dynamic = 'force-dynamic';

export function GET() {
  return Response.json({ hello: 'from a Next.js route on a Palbase machine', at: new Date().toISOString() });
}
