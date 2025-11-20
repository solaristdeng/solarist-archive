import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fileTimestampsPlugin from './vite-plugin-file-timestamps.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), fileTimestampsPlugin()],
  base: '/solarist-archive/',
  build: {
    target: 'esnext' // <--- 关键修复：设置为 esnext 以支持 import.meta.glob
  }
})