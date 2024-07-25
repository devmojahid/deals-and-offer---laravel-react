import React, { createContext, useContext, useEffect, useState } from 'react';
import { Provider as AppBridgeProvider } from '@shopify/app-bridge-react';
import createApp from '@shopify/app-bridge';
import { getSessionToken } from '@shopify/app-bridge-utils';
import { Redirect } from '@shopify/app-bridge/actions';

const ShopifyContext = createContext();

export const ShopifyProvider = ({ children }) => {
    const [appBridge, setAppBridge] = useState(null);
    const [sessionToken, setSessionToken] = useState(null);

    useEffect(() => {
        const app = createApp({
            apiKey: document.getElementById('apiKey').value,
            shopOrigin: new URLSearchParams(window.location.search).get('shop'),
            host: document.getElementById('host').value,
            forceRedirect: true,
        });

        const fetchSessionToken = async () => {
            const token = await getSessionToken(app);
            window.sessionToken = token;
            setSessionToken(token);
            window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        };

        fetchSessionToken();
        setAppBridge(app);
    }, []);

    return (
        <ShopifyContext.Provider value={{ appBridge, sessionToken }}>
            <AppBridgeProvider config={appBridge?.config || {}}>
                {children}
            </AppBridgeProvider>
        </ShopifyContext.Provider>
    );
};

export const useShopify = () => useContext(ShopifyContext);


// src/ShopifyContext.js
// import { createContext, useContext, useEffect, useState } from 'react';
// import { useAppBridge } from '@shopify/app-bridge-react';

// const ShopifyContext = createContext();

// export const ShopifyProvider = ({ children }) => {
//     const app = useAppBridge();
//     const [sessionToken, setSessionToken] = useState(null);

//     useEffect(() => {
//         const fetchSessionToken = async () => {
//             const sessionToken = await getSessionToken(app);
//             console.log("Token "+sessionToken);
//             localStorage.setItem('sessionToken', sessionToken);
//             setSessionToken(sessionToken);
//         };

//         fetchSessionToken();
//     }, [app]);

//     return (
//         <ShopifyContext.Provider value={{ sessionToken }}>
//             {children}
//         </ShopifyContext.Provider>
//     );
// };

// export const useShopify = () => useContext(ShopifyContext);

// const getSessionToken = async (app) => {
//     return new Promise((resolve, reject) => {
//         const unsubscribe = app.subscribe('APP::SESSION_TOKEN::UPDATE', (event) => {
//             resolve(event.data.sessionToken);
//             unsubscribe();
//         });

//         app.dispatch({
//             type: 'APP::SESSION_TOKEN::REQUEST',
//         });
//     });
// };




// import React, { createContext, useContext, useEffect } from "react";
// import { usePage } from "@inertiajs/react";
// import createApp from "@shopify/app-bridge";

// const ShopifyContext = createContext();

// export const useShopify = () => useContext(ShopifyContext);
// const ShopifyProvider = ({ children }) => {
//   //   const { shopDomain, apiKey } = usePage().props;

//   const { props } = usePage();
//   const { shopDomain, apiKey } = props;

//   const config = {
//     apiKey,
//     shopOrigin: shopDomain,
//     forceRedirect: true,
//   };

//   const [app, setApp] = useState(null);

//   useEffect(() => {
//     const appInstance = createApp(config);
//     setApp(appInstance);
//   }, [shopDomain, apiKey]);

//   return (
//     <ShopifyContext.Provider value={{ config, app }}>
//       {children}
//     </ShopifyContext.Provider>
//   );
// };

// export default ShopifyProvider;
