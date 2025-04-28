import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
          icons: ['lucide-react']
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.jpg') || assetInfo.name.endsWith('.png')) {
            return '[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
    copyPublicDir: true,
    emptyOutDir: true
  },
  publicDir: 'public',
  base: '/'
});