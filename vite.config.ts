import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Components({
      version: 3,
      dts: 'types/components.d.ts'
    }),
    AutoImport({
      dts: 'types/auto-import.d.ts',
      imports: [
        'vue',
      ],
      dirs: [
        './src/domains',
        './src/store'
      ]
    }),
  ],
})
