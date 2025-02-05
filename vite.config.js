import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteMinifyPlugin({
      collapseWhitespace: true,
      removeComments: true,
      useShortDoctype: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      minifyJS: true,
      minifyCSS: false
    })
  ],
  root: '.',
  build: {
      minify: 'esbuild',
      emptyOutDir: true, // if needinig to clear outDir without a warning
      outDir: './dist', // relative to root
      rollupOptions: {
          input: 'index.html',
          output: {
              entryFileNames: 'assets/js/[name].js',
              chunkFileNames: 'assets/js/[name].js',
              assetFileNames: ({ names }) => {
                  const name = names.join('/');
                  if (name.endsWith('.js')) return 'assets/js/[name].[ext]';
                  if (name.endsWith('.css')) return 'assets/css/[name].[ext]';
                  if (name.includes('favicon')) return 'assets/icons/[name].[ext]';
                  if (name.endsWith('.ico')) return 'assets/icons/[name].[ext]';
                  return 'assets/images/[name].[ext]';
              }
          }
      }
  }
})
