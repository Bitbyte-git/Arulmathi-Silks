import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/visitor': {
        target: 'https://k5sc1xyw97.execute-api.ap-south-1.amazonaws.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/visitor/, '/visitor'),
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined

          // Keep the React runtime stable and cacheable independently from
          // application code. Route components are already split by React.lazy.
          if (
            id.includes('/react/') ||
            id.includes('\\react\\') ||
            id.includes('/react-dom/') ||
            id.includes('\\react-dom\\') ||
            id.includes('/scheduler/') ||
            id.includes('\\scheduler\\')
          ) {
            return 'react-vendor'
          }

          return 'vendor'
        },
      },
    },
  },
})
