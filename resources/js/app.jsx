import "../css/app.css";

import { createRoot, hydrateRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ShopifyProvider } from "./Components/ShopifyContext";
import ErrorBoundary from "./ErrorBoundary";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob("./Pages/**/*.jsx")
    ),
  setup({ el, App, props }) {
    if (import.meta.env.DEV) {
      createRoot(el).render(
        <ShopifyProvider>
        <App {...props} />
         </ShopifyProvider>
      );
      return;
    }

    hydrateRoot(
      el,
      // <ShopifyProvider>
      <App {...props} />
      // </ShopifyProvider>
    );
  },
  progress: {
    color: "#4B5563",
  },
});
