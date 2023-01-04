import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

function resolve(src:string):string {
  return path.resolve(__dirname, src)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  }
})
