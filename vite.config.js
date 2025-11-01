import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Better-Direct-AI-Website/', // GitHub Pages subdirectory
  plugins: [react()],
})
