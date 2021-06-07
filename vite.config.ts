import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import styleImport from "vite-plugin-style-import";

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  plugins: [vue(), styleImport({
    libs: [{
      libraryName: 'element-plus',
      esModule: true,
      ensureStyleFile: true,
      resolveStyle: (name) => {
        name = name.slice(3)
        return `element-plus/packages/theme-chalk/src/${name}.scss`;
      },
      resolveComponent: (name) => {
        return `element-plus/lib/${name}`;
      },
    }]
  })],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "",
        ws: true,
        changeOrigin: true,
        rewrite: path => path.replace("/api", "/api/v2")
      }
    }
  }
})
