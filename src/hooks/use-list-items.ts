import { useListState } from "@mantine/hooks";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import ITEMS_MAP from "src/data/_items";
import filterAtom from "src/data/filter-atom";
import type { Item, ItemId, Lang, Season } from "src/data/_types";
import debounce from "debounce";
import { load, store } from "src/utils/local-storage";

type HidableItem = Item & { hidden?: boolean };

// Load default order from Storage
let orderedItemList: HidableItem[] = [];
try {
  const storedOrder = load<ItemId[]>("items-order", []);
  orderedItemList = storedOrder.length ? storedOrder.map((id) => ITEMS_MAP[id]) : Object.values(ITEMS_MAP);
} catch (e) {
  console.error(e);
  orderedItemList = Object.values(ITEMS_MAP);
}

const storeOrderedList = debounce((list: HidableItem[]) => {
  store("items-order", list.map((item) => item.id));
}, 3000);

const useListItems = () => {
  const { i18n } = useTranslation();
  const [filters] = useAtom(filterAtom);

  const [state, handlers] = useListState<HidableItem>(orderedItemList);

  useEffect(() => {
    storeOrderedList(state);
  }, [state]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Infinite render when using handlers
  useEffect(() => {
    handlers.apply((item) => {
      let result = false;
      if (filters.name && !filterByName(item.name[i18n.language as Lang], filters.name)) {
        result = true;
      }

      if (filters.season.length && !filterBySeason(item.season, filters.season)) {
        result = true;
      }

      return {
        ...item,
        hidden: result,
      };
    });
  }, [filters, i18n.language]);

  return [state, handlers] as const;
};

const filterByName = (name: string, filter?: string) => {
  if (!filter) return true;

  const normalizedFilter = filter
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gv, "")
    .toLowerCase();

  const normalizedName = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gv, "")
    .toLowerCase();

  return normalizedName.indexOf(normalizedFilter) >= 0;
};

const filterBySeason = (season?: Season[], filter?: Season[]) => {
  if (!season || !season.length || !filter || !filter.length) return true;
  return filter.some((elem) => season.includes(elem));
};

export default useListItems;
