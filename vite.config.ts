// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@analysers': path.resolve(__dirname, './src/analysers'),
            '@util': path.resolve(__dirname, './src/util/index'),
        }
    },
    base: '/AudioVisualiserJSExtended/'
})
