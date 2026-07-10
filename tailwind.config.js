import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ⚠️ Importante para GitHub Pages: usa rutas relativas para que los
  // archivos generados (JS/CSS) se encuentren sin importar en qué
  // subcarpeta (usuario.github.io/nombre-repo/) quede publicada la página.
  base: './',
})
