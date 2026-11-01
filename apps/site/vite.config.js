import { defineConfig } from 'vite';
export default defineConfig({ define: { __BUILD__: JSON.stringify(process.version) } });
