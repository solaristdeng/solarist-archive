import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fileTimestampsPlugin from './vite-plugin-file-timestamps.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), fileTimestampsPlugin()],
  base: '/solarist-archive/',
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-markdown': ['react-markdown', 'remark-gfm'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
})