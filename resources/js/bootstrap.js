import axios from 'axios';
import createApp from '@shopify/app-bridge';
import { getSessionToken } from '@shopify/app-bridge-utils';


window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequPdest';

// window.axios = require("axios")
const app = createApp({
    apiKey: document.getElementById("apiKey").value,
    shopOrigin: document.getElementById("apiKey").value,
    host: document.getElementById("host").value,
    forceRedirect: true,
});


async function retrieveToken(app) {
    window.sessionToken = await getSessionToken(app);
    window.axios.defaults.headers.common['Authorization'] = `Bearer ${window.sessionToken}`;
}

function keepRetrievingToken(app) {
    setInterval(() => {
        retrieveToken(app);
    }, 2000)
}

keepRetrievingToken(app);





// const axiosInstance = axios.create({
//     baseURL: '/',
// });

// axiosInstance.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem('sessionToken');
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${ token } `;
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );

// export default axiosInstance;

// const app = createApp({
//     apiKey: import.meta.env.SHOPIFY_API_KEY,
//     // shopOrigin: window.shopOrigin,
//     host: new URLSearchParams(location.search).get('host'),
//     forceRedirect: true,
// });

// async function retriveSessionToken() {
//     const response = await axios.get('/api/session-token');
//     return response.data;
// }

// window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
// window.axios.defaults.headers.common['Authorization'] = `Bearer ${ await retriveSessionToken() } `;
// ax