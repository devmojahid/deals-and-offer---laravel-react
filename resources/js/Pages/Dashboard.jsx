import React from "react";
import { TitleBar } from "@shopify/app-bridge-react";
import { useShopify } from "../Components/ShopifyContext";

const Dashboard = () => {
  const { config } = useShopify();
  return (
    <div>
      <TitleBar title="Dashboard" />
      <h1>Dashboard</h1>
      <p>
        Welcome to the dashboard! You're connected to the Shopify store with the
        domain <strong>{config.shopOrigin}</strong>.
        <p>You are: {config.shopOrigin}</p>
      </p>
    </div>
  );
};

export default Dashboard;
