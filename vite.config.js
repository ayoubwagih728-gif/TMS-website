import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
  build: {
    target: 'es2018',
    minify: 'esbuild',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        // Function form — works in both classic Rollup AND Rolldown.
        // Splits React + React Router into a cacheable vendor chunk.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('/react/') ||
              id.includes('/react-dom/') ||
              id.includes('/react-router') ||
              id.includes('/scheduler/')
            ) {
              return 'react'
            }
          }
        },
      },
    },
    reportCompressedSize: false,
  },
})
