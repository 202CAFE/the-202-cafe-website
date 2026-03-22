import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: 'react',
    }),
    tailwindcss(),
  ],
  base: '/',
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],
})
