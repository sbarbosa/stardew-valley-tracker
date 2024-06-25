import { ActionIcon, Box, Button, Group, Input, Stack, Transition } from "@mantine/core";
import debounce from "debounce";
import { useAtom } from "jotai";
import { type RefObject, useState } from "react";
import filterAtom from "src/data/filter-atom";
import { useTranslation } from "react-i18next";
import type { ItemListRef } from "./item-list";

import CheevronDownIcon from 'src/assets/icons/chevron-down.svg';
import CheevronDownUp from 'src/assets/icons/chevron-up.svg';

interface Props {
  itemListRef?: RefObject<ItemListRef>;
  className?: string;
}

const SearchBox = ({ itemListRef, className }: Props) => {
  const [filter, setFilter] = useAtom(filterAtom);
  const [opened, setOpened] = useState(false);
  const { t } = useTranslation();

  const onSearchChange = debounce((element) => {
    setFilter((data) => {
      data.name = element.target.value;
    })
  }, 200);


  return (
    <Stack className={className}>
      <Group>
        <Input placeholder={t("search.placeholder")} flex={1} defaultValue={filter.name} radius={8} size="md" onChange={onSearchChange} />
        <ActionIcon variant="transparent" onClick={() => setOpened((o) => !o)}>
          {opened ? <CheevronDownUp /> : <CheevronDownIcon />}
        </ActionIcon>
      </Group>


      <Box>
        <Transition
          mounted={opened}
          transition="slide-down"
          duration={400}
          timingFunction="ease"
        >
          {(styles) => (
            <Group style={styles}>
              <Button variant="subtle" size="compact-xs" onClick={() => itemListRef?.current?.resetOrder()}>{t("search.options.clearOrder")}</Button>
            </Group>
          )}
        </Transition>
      </Box>
    </Stack>
  );
}

export default SearchBox;
