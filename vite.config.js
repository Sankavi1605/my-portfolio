import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import tslOperatorPlugin from 'vite-plugin-tsl-operator'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tslOperatorPlugin({logs:false})
  ],
  build: {
    minify: false,
    target: 'esnext'
  }
})