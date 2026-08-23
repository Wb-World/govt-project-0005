import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

function copyStaticAssets() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      const root = process.cwd();
      const outDir = resolve(root, 'dist');

      mkdirSync(outDir, { recursive: true });
      cpSync(resolve(root, 'assets'), resolve(outDir, 'assets'), { recursive: true });

      const vijayImage = resolve(root, 'vijay.jpeg');
      if (existsSync(vijayImage)) {
        cpSync(vijayImage, resolve(outDir, 'vijay.jpeg'));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyStaticAssets()],
  build: {
    // Raise chunk warning limit — the legacy HTML imports are intentionally large
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        // Split vendor code into separate cacheable chunks
        manualChunks(id) {
          if (id.includes('node_modules/@supabase')) return 'supabase';
          if (id.includes('node_modules/react-router') || id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) return 'react-vendor';
        },
      },
    },
  },
});