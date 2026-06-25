import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repositoryName = 'portfolio'

/**
 * GitHub Pages 배포 위치에 맞는 base 경로를 반환한다.
 */
const resolveBasePath = () => {
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH
  }

  return process.env.GITHUB_PAGES === 'true' ? `/${repositoryName}/` : '/'
}

export default defineConfig({
  base: resolveBasePath(),
  plugins: [vue()],
})
