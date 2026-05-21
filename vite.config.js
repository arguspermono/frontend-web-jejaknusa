import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'home.html'),
        destination: resolve(__dirname, 'destination.html'),
        about: resolve(__dirname, 'about_us.html'),
        article: resolve(__dirname, 'article_detail.html'),
      },
    },
  },
  server: {
    open: '/home.html',
    port: 3000,
  },
});
