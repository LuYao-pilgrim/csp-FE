import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './',
  plugins: [
    vue()
  ],
  // // 反向代理配置 - 可解决跨域问题
  server:{
    proxy: { 
      '/api': {
       target: "http://39.107.238.92:8080",
       changeOrigin: true,
       rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})

