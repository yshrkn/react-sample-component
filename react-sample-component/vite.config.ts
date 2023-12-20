import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const pkg = require('./package.json');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    emptyOutDir: false,

    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "MyLib",
      fileName: (format) => `index.${format}.js`,
    },

    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
  plugins: [react()],
});
