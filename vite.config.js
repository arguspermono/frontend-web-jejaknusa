import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/frontend_web_jejaknusa/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about_us.html'),
        destinations: resolve(__dirname, 'destinations.html'),
        article: resolve(__dirname, 'article.html'),
        destinationDetail: resolve(__dirname, 'destination-detail.html'),
      }
    }
  },
  server: {
    open: 'index.html',
    port: 3000,
  },
});
