import Clock from './clock';

// Rendered on the server at every request: the time below is the server's.
export const dynamic = 'force-dynamic';

export default function Home() {
  return <main>
    <h1>Rendered on the server (PR)</h1>
    <p id="rendered">rendered at {new Date().toISOString()} by Node {process.version}</p>
    <Clock />
  </main>;
}
