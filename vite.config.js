// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Simply-Natural/', // this is the GitHub repo name
  plugins: [react()],
})
