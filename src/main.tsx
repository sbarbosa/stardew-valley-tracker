import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "jotai/react";
import { MantineProvider } from '@mantine/core';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import "./assets/styles/main.scss";

import { routeTree } from './routeTree.gen';
import { theme } from "./theme";
import { store } from './data';

// Initializing Internationalization
import "./i18n";

// Set up a Router instance
const router = createRouter({
  routeTree,
  context: {
    store,
  },
  defaultPreload: "intent",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const root = document.getElementById("root");
if (!root) throw Error("Cound't find initial dom base element.");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
);
