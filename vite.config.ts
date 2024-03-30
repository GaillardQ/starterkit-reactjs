import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react()
    ],envDir: './env',
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, './src/@app'),
            '@core': path.resolve(__dirname, './src/@core'),
            '@ui': path.resolve(__dirname, './src/@ui'),
        },
    },
    server: {
        port: 8080,
        host: 'localhost',
        open: true,
        proxy: {
            '/pokemon-api': {
                target: 'https://pokeapi.co/api/v2',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace('/pokemon-api', '/')
            }
        }
    },
});
