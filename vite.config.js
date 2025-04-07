import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5f21-49-36-144-42.ngrok-free.app'],
    host: true,
    port: 5174
  }
}) 