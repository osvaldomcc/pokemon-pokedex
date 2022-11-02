import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

const projectRootDir = resolve(__dirname)

export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        {
          find: '@',
          replacement: resolve(projectRootDir, 'src'),
        },
      ],
    }),
    eslintPlugin(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
