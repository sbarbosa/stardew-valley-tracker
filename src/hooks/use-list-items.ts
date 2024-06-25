import { useListState } from "@mantine/hooks";
import { useEffect, useMemo } from "react";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import ITEMS_MAP from "src/data/_items";
import filterAtom from "src/data/filter-atom";
import type { Item, ItemId, Lang, Season } from "src/data/_types";
import debounce from "debounce";
import { load, store } from "src/utils/local-storage";

type ExtendedItem = Item & { completed?: boolean; hidden?: boolean };

// Load default order from Storage
let orderedItemList: ExtendedItem[] = [];
try {
  const storedOrder = load<{ id: ItemId; completed?: boolean }[]>("items-list", []);
  orderedItemList = storedOrder.length ? storedOrder.map(({ id, completed }) => ({ ...ITEMS_MAP[id], completed })) : Object.values(ITEMS_MAP);
} catch (e) {
  console.error(e);
  orderedItemList = Object.values(ITEMS_MAP);
}

const storeOrderedList = debounce((list: ExtendedItem[]) => {
  store("items-list", list.map((item) => ({ id: item.id, completed: item.completed })));
}, 3000);

type ListOptions = {
  reorder: (args: { from: number; to: number }) => void;
  resetOrder: () => void;
};

const useListItems = () => {
  const { i18n } = useTranslation();
  const [filters] = useAtom(filterAtom);

  const [state, handlers] = useListState<ExtendedItem>(orderedItemList);

  useEffect(() => {
    storeOrderedList(state);
  }, [state]);


  // biome-ignore lint/correctness/useExhaustiveDependencies: Infinite render when using handlers
  const options = useMemo<ListOptions>(() => ({
    reorder: handlers.reorder,
    resetOrder: () => handlers.setState((state) => {
      return Object.values(ITEMS_MAP).map((item) => {
        const orderedItem = state.find((ordered) => ordered.id === item.id);
        return {
          ...item,
          completed: orderedItem?.completed,
        };
      })
    })
  }), []);


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

  return [state, options] as const;
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
