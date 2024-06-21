import { LoadingOverlay } from "@mantine/core";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { Layout } from "src/layout";

import type { Store } from "src/data";

export const Route = createRootRouteWithContext<{ store: Store }>()({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
  pendingComponent: () => (
    <LoadingOverlay visible zIndex={1000} overlayProps={{ blur: 2 }} loaderProps={{ size: "lg", type: "dots" }} />
  ),
});
