/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    includeSource: ['src/**/*.{js,ts}']
  },
  plugins: [vue()]
})
