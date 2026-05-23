import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about_us: resolve(__dirname, 'about_us.html'),
      },
    },
  },
  server: {
    open: '/index.html',
    port: 3000,
  },
});
