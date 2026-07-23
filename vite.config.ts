import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Respect a port assigned via the PORT env var (falls back to Vite's default).
    port: process.env.PORT ? Number(process.env.PORT) : undefined,
  },
})
