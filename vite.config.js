import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    // my app url is APP_URL=http://post-nest.test
    server: {
        host: 'deal-and-offer.test',
        https: {
            key: 'C:\\laragon\\etc\\ssl\\laragon.key', // Adjust the path as necessary
            cert: 'C:\\laragon\\etc\\ssl\\laragon.crt', // Adjust the path as necessary
        },
    }
});
