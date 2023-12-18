import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
		'@app': path.resolve(__dirname, "./src/@app"),
		'@core': path.resolve(__dirname, "./src/@core"),
		'@ui': path.resolve(__dirname, "./src/@ui"),
	},
  },
})