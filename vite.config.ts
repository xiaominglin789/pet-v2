import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import styleImport from "vite-plugin-style-import";

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      views: path.resolve(__dirname, './src/views'),
      components: path.resolve(__dirname, './src/components'),
      utils: path.resolve(__dirname, './src/utils'),
      assets: path.resolve(__dirname, "./src/assets"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      store: path.resolve(__dirname, "./src/store"),
      router: path.resolve(__dirname, "./src/router"),
      api: path.resolve(__dirname, "./src/api"),
    }
  },
  plugins: [vue(), styleImport({
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => `vant/es/${name}/style/less`,
      },
    ],
  }),],
  build: {
    //浏览器兼容性
    target: 'es2015',
    //输出目录
    outDir: `dist/`,
    //指定生成静态资源的存放路径
    assetsDir: 'assets',
    //启用/禁用 CSS 代码拆分。当启用时，在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在块加载时插入。
    // 如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中。
    cssCodeSplit: true,
    //在构建生产包时生成 sourceMap 文件
    sourcemap: false,
    //启用/禁用 brotli 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
    brotliSize: false,
  },
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
