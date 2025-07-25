import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-hot-toast'],
    exclude: ['http'] // prevent Vite from trying to prebundle Node core modules
  },
  resolve: {
    alias: {
      // Prevent resolution of Node.js core modules like 'http', 'fs', etc.
      http: false,
      https: false,
      fs: false,
      net: false,
      tls: false,
    },
  },
});
