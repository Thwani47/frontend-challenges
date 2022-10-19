import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/frontend-challenges/testimonial-grid",
  plugins: [react()]
})
