import React, { createContext, useContext, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import createApp from "@shopify/app-bridge";

const ShopifyContext = createContext();

export const useShopify = () => useContext(ShopifyContext);
const ShopifyProvider = ({ children }) => {
  //   const { shopDomain, apiKey } = usePage().props;

  const { props } = usePage();
  const { shopDomain, apiKey } = props;

  const config = {
    apiKey,
    shopOrigin: shopDomain,
    forceRedirect: true,
  };

  const [app, setApp] = useState(null);

  useEffect(() => {
    const appInstance = createApp(config);
    setApp(appInstance);
  }, [shopDomain, apiKey]);

  return (
    <ShopifyContext.Provider value={{ config, app }}>
      {children}
    </ShopifyContext.Provider>
  );
};

export default ShopifyProvider;
