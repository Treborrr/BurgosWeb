import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'

export default defineConfig({
  plugins: [reactRouter()],

  build: {
    // Activa mangling de nombres en producción
    minify: 'esbuild',
    // Evita sourcemaps públicos (no exponer código fuente en producción)
    sourcemap: false,
  },

  server: {
    // Headers de seguridad en desarrollo local
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },
})
