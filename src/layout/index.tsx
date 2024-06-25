import { AppShell } from "@mantine/core";
import { lazy, type PropsWithChildren } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "./header";
import { Footer } from "./footer";
import { NavBar } from "./navbar";

import classes from "./style.module.scss";

const RouterDevtools =
  import.meta.env.MODE === "production"
    ? () => null // Render nothing in production
    : lazy(() =>
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    );


interface Props extends PropsWithChildren {
}

export const Layout = ({ children }: Props) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 70 }}
      footer={{ height: 50 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >

      <AppShell.Header classNames={classes}>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar p="md"><NavBar /></AppShell.Navbar>

      <AppShell.Main classNames={classes}>{children}</AppShell.Main>

      <AppShell.Footer classNames={classes}>
        <Footer />
      </AppShell.Footer>

      <RouterDevtools position="bottom-left" />
    </AppShell>
  );


}
