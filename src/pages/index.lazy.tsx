import { Center, Container, Loader, ScrollArea } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Suspense, lazy, useRef } from "react";
import SearchBox from "src/components/search-box";
import type { ItemListRef } from "src/components/item-list";

import classes from "./style.module.scss";

const ItemList = lazy(() => import('src/components/item-list'));

function Home() {
  const itemListRef = useRef<ItemListRef>(null);

  return (
    <Container fluid className={classes.container}>
      <SearchBox className={classes.searchbox} itemListRef={itemListRef} />

      <ScrollArea type="auto" className={classes.content}>
        <Suspense fallback={<Center mt="xl"><Loader size="lg" type="dots" /></Center>}>
          <ItemList ref={itemListRef} />
        </Suspense>
      </ScrollArea>
    </Container>
  );
};
const RouteComponent = Home;

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});
