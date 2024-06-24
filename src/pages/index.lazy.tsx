import { Box, Center, Container, Input, Loader, ScrollArea } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import debounce from "debounce";
import { useAtom } from "jotai";
import filterAtom from "src/data/filter-atom";
import classes from "./style.module.scss";
import { Suspense, lazy } from "react";

const ItemList = lazy(() => import('src/components/item-list'));


function Home() {
  const [filter, setFilter] = useAtom(filterAtom);

  const onSearchChange = debounce((element) => {
    setFilter((data) => {
      data.name = element.target.value;
    })
  }, 200);

  return (
    <Container fluid className={classes.container}>
      <Box className={classes.searchbox}>
        <Input placeholder="Search ..." defaultValue={filter.name} radius={8} size="md" onChange={onSearchChange} />
      </Box>

      <ScrollArea type="auto" className={classes.content}>
        <Suspense fallback={<Center mt="xl"><Loader size="lg" type="dots" /></Center>}>
          <ItemList />
        </Suspense>
      </ScrollArea>
    </Container>
  );
};
const RouteComponent = Home;

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});
