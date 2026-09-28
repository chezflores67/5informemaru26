import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: true,
    watch: {
      usePolling: true,
    },
  },
  // Serve the repo root as static root — index.html is at the top level
  root: '.',
  base: './',
});
