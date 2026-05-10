import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Base '/' ensures your assets are searched for at yourdomain.com.np/assets/
  base: '/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generates a manifest file which helps with caching issues
    manifest: true,
    // Ensure the build is cleared before re-building
    emptyOutDir: true,
  }
})