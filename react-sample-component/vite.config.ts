import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
import { libInjectCss, scanEntries } from 'vite-plugin-lib-inject-css';
// import { extname, relative, resolve } from 'path'
// import { fileURLToPath } from 'node:url'
// import { glob } from 'glob'


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
      // input: Object.fromEntries(
      //   glob.sync('lib/**/*.{ts,tsx}').map(file => [
      //     // The name of the entry point
      //     // lib/nested/foo.ts becomes nested/foo
      //     relative(
      //       'lib',
      //       file.slice(0, file.length - extname(file).length)
      //     ),
      //     // The absolute path to the entry file
      //     // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
      //     fileURLToPath(new URL(file, import.meta.url))
      //   ])
      // ),
      // output: {
      //   assetFileNames: 'assets/[name][extname]',
      //   entryFileNames: '[name].js',
      // }
    },
  },
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ['lib'] })
  ],
});
