import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './'),
  //     'typed.js': path.resolve(__dirname, './node_modules/typed.js/dist/typed.umd.js'),
  //     'mathjax': path.resolve(__dirname, './node_modules/mathjax')
  //   }
  // },
  optimizeDeps: {
    include: ['typed.js', 'mathjax/es5/tex-mml-chtml.js']
  },
  build: {
    sourcemap: true,
    minify: 'terser',
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      external: ['typed.js', 'mathjax'],
      output: {
        globals: {
          'typed.js': 'Typed',
          'mathjax': 'MathJax'
        }
      }
    }
  },
  server: {
    port: 5123,
    open: true,
    cors: true
  }
}) 