import React, { useEffect } from 'react';
// import { TitleBar } from "@shopify/app-bridge-react";
import { useShopify } from "../Components/ShopifyContext";
import { Head, Link, useForm } from "@inertiajs/react";
import { TitleBar, NavigationMenu, ContextualSaveBar } from '@shopify/app-bridge-react';
import {
  Box,
  Card,
  Page,
  Text,
  BlockStack,
  InlineGrid,
  TextField,
  Divider,
  useBreakpoints,
  Button,
} from "@shopify/polaris";
// import axios from '../AxiosInstance';

const Dashboard = () => {
  const { smUp } = useBreakpoints();
  
  const { appBridge } = useShopify();
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
      if (appBridge) {
          const titleBarOptions = {
              title: 'Dashboard',
          };

          TitleBar.create(appBridge, titleBarOptions);
      }
  }, [appBridge]);

  const handleSave = () => {
      // Handle save action
      setIsDirty(false);
  };

  const handleDiscard = () => {
      // Handle discard action
      setIsDirty(false);
  };

  return (
    <div>
      {/* inertia link in ul li taf */}

      <ul>
        <li>
          <Link href="/">Dashboard</Link>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>

      <TitleBar title="Dashboard" />
      <h1>Dashboard</h1>
      <p>
        Welcome to the dashboard! You're connected to the Shopify store with the
        {/* domain <strong>{config.shopOrigin}</strong>. */}
        {/* <p>You are: {config.shopOrigin}</p> */}
      </p>
      <BlockStack gap={{ xs: "800", sm: "400" }}>
        <InlineGrid columns={{ xs: "1fr", md: "2fr 5fr" }} gap="400">
          <Box
            as="section"
            paddingInlineStart={{ xs: 400, sm: 0 }}
            paddingInlineEnd={{ xs: 400, sm: 0 }}
          >
            <BlockStack gap="400">
              <Text as="h3" variant="headingMd">
                Settings
              </Text>
              <Text as="p" variant="bodyMd">
                Configure your app settings. These settings will be used in
                various places in your app.
              </Text>
            </BlockStack>
          </Box>
          <Card roundedAbove="sm">
            {/* <Form method="POST">
              <BlockStack gap="400">
                <TextField label="App Name" name="name" />
                <TextField label="App Description" name="description" />
                <Button submit={true}>Save</Button>
              </BlockStack>
            </Form> */}
          </Card>
        </InlineGrid>
        {smUp ? <Divider /> : null}
      </BlockStack>
    </div>
  );
};

export default Dashboard;
