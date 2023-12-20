import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts'
const pkg = require('./package.json');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './lib'),
    },
  },
  build: {
    copyPublicDir: false,

    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: 'reactSampleComponent',
      fileName: (format) => `index.${format}.js`,
    },

    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
  plugins: [
    react(),
    dts({ include: ['lib'] })
  ],
});
