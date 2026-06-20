import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Served from the immunly.org custom domain root, not a github.io/<repo>
  // subpath, so base must stay '/' (the default) rather than the repo name.
  base: '/',
})
