import { Box, Container, Input, ScrollArea, Stack } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useListBundles } from "src/hooks/use-list-bundles";
import debounce from "debounce";
import { useAtom } from "jotai";
import filterAtom from "src/data/filter-atom";
import classes from "./style.module.scss";
import { Suspense, lazy } from "react";

const Bundle = lazy(() => import('src/components/bundle'));

function Home() {
  const bundles = useListBundles();
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
        <Stack gap="md">
          <Suspense fallback={"LOADING!!"}>
            {bundles.map((bundle) => (
              <Bundle key={bundle.id} bundle={bundle} />
            ))}
          </Suspense>
        </Stack>
      </ScrollArea>
    </Container>
  );
};
const RouteComponent = Home;

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});
