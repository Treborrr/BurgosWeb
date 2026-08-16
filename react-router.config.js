/** @type {import('@react-router/dev/config').Config} */
export default {
  // Mantiene la estructura de carpetas existente (src/) en vez de app/
  appDirectory: 'src',
  // Mismo directorio de salida que antes, para no tocar la config de Cloudflare Pages
  buildDirectory: 'dist',
  // Sin servidor: todo se pre-renderiza a HTML estático en build time
  ssr: false,
  prerender: ['/', '/en'],
};
