'use client';
import { useEffect, useState } from 'react';

// A client component: its script is one of /_next/static/'s.
export default function Clock() {
  const [now, setNow] = useState('');
  useEffect(() => { setNow(new Date().toISOString()); }, []);
  return <p id="browser">and the browser says {now || '…'}</p>;
}
