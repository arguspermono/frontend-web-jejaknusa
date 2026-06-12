import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  base: '/frontend-web-jejaknusa/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about_us: resolve(__dirname, 'about_us.html'),
        destinations: resolve(__dirname, 'destinations.html'),
        article: resolve(__dirname, 'article.html'),
        destination_detail: resolve(__dirname, 'destination-detail.html'),
      },
    },
  },
  server: {
    open: '/index.html',
    port: 3000,
  },
});
