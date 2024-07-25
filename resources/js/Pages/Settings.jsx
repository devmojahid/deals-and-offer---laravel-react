import React from "react";
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
import { TitleBar } from "@shopify/app-bridge-react";
import { Head, Link, useForm } from "@inertiajs/react";

const Settings = () => {
  const { smUp } = useBreakpoints();
  return (
    <>
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
   
    <Page>
      <TitleBar title="Settings page" />
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
    </Page>
    </>
  );
};

export default Settings;
