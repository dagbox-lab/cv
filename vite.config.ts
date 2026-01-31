import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cv/', // Indispensable pour que le site fonctionne sur https://dagbox-lab.github.io/cv/
})