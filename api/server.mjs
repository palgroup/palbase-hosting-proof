// Says which environment's settings it was started with: the proof that a
// pull request's preview runs with the preview environment's, never production's.
import http from 'node:http';
http.createServer((req, res) => {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify({ environment_secret: process.env.PROOF_SECRET ?? null, commit: process.env.PALBASE_COMMIT ?? null }));
}).listen(Number(process.env.PORT ?? 8080));
// preview c
