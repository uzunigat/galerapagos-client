import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1/ws': {
        target: 'ws://localhost:3001',
        changeOrigin: true,
        ws: true,
      },
    },
    port: 3002,
  },
})
