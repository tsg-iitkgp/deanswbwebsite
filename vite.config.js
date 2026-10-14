import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteComplaintApi } from './scripts/viteComplaintApi.js'

export default defineConfig({
  plugins: [react(), viteComplaintApi(process.env)],
  server: {
    host: '127.0.0.1',
    port: Number(process.env.PORT || 9500),
    strictPort: true,
  },
})
