import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuração oficial Vite + Tailwind v4 (2026)
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
