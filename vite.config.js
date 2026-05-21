import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home.html'),
        destination: resolve(__dirname, 'destination.html'),
        about: resolve(__dirname, 'about.html'),
        about_us: resolve(__dirname, 'about_us.html'),
        article: resolve(__dirname, 'article_detail.html'),
      },
    },
  },
  server: {
    open: '/index.html',
    port: 3000,
  },
});
