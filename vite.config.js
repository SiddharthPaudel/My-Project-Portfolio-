import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Explicitly set the base path to ensure assets load correctly on your domain
  base: '/', 
  build: {
    // This ensures your output is clean and compatible with most hosting providers
    outDir: 'dist',
    assetsDir: 'assets',
  }
})