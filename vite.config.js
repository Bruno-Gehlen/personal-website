import { defineConfig } from 'vite'

export default defineConfig({
  // Configuração base para deploy na Vercel
  base: './',
  
  // Configurações de build
  build: {
    // Gera source maps para melhor debugging
    sourcemap: true,
    
    // Otimiza o bundle final
    minify: 'terser',
    
    // Configurações de output
    outDir: 'dist',
    assetsDir: 'assets',
    
    // Otimizações de rollup
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa vendors (bibliotecas externas) em chunks diferentes
          vendor: ['typed.js']
        }
      }
    }
  },

  // Configurações do servidor de desenvolvimento
  server: {
    port: 5123,
    open: true,
    cors: true
  }
}) 