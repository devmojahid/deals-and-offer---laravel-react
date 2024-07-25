import axios from 'axios';
import createApp from '@shopify/app-bridge';
window.axios = axios;


const app = createApp({
    apiKey: import.meta.env.SHOPIFY_API_KEY,
    // shopOrigin: window.shopOrigin,
    host: new URLSearchParams(location.search).get('host'),
    forceRedirect: true,
});

async function retriveSessionToken() {
    const response = await axios.get('/api/session-token');
    return response.data;
}

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
window.axios.defaults.headers.common['Authorization'] = `Bearer ${await retriveSessionToken()}`;
// ax