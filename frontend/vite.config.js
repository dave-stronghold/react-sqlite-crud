import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import macrosPlugin from 'vite-plugin-babel-macros';
import envCompatible from 'vite-plugin-env-compatible';
// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps:{
    esbuildOptions:{
      target: 'es2020',
    },
  },
  esbuild:{
logOverride:{'this-is-undefined-in-esm':'silent'},
  },
  plugins: [react(),envCompatible(),macrosPlugin() ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
})
