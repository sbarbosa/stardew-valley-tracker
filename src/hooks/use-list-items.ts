import { useListState } from "@mantine/hooks";
import { useEffect, useMemo } from "react";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import ITEMS_MAP from "src/data/_items";
import filterAtom from "src/data/filter-atom";
import type { AchivementType, BundleId, Item, ItemId, Lang, Season, Weather } from "src/data/_types";
import debounce from "debounce";
import { load, store } from "src/utils/local-storage";

type CompletedState = 'partial' | 'total';
type ExtendedItem = Item & { completed?: CompletedState; hidden?: boolean };

const DEFAULT_ITEM_LIST = Object.values(ITEMS_MAP).filter((item) => !!item.requiredBy)

// Load default order from Storage
let orderedItemList: ExtendedItem[] = [];
try {
  const storedOrder = load<{ id: ItemId; completed?: CompletedState }[]>("items-list", []);
  orderedItemList = storedOrder.length ? storedOrder.map(({ id, completed }) => ({ ...ITEMS_MAP[id], completed })) : DEFAULT_ITEM_LIST;
} catch (e) {
  console.error(e);
  orderedItemList = DEFAULT_ITEM_LIST;
}

const storeData = debounce((list: ExtendedItem[]) => {
  store("items-list", list.map((item) => ({ id: item.id, completed: item.completed })));
}, 3000);

type ListOptions = {
  reorder: (args: { from: number; to: number }) => void;
  resetOrder: () => void;
  setCompleted: (index: number, status?: CompletedState) => void;
};


const useListItems = () => {
  const { i18n } = useTranslation();
  const [filters] = useAtom(filterAtom);

  const [state, handlers] = useListState<ExtendedItem>(orderedItemList);

  useEffect(() => {
    storeData(state);
  }, [state]);


  // biome-ignore lint/correctness/useExhaustiveDependencies: Infinite render when using handlers
  const options = useMemo<ListOptions>(() => ({
    reorder: handlers.reorder,
    resetOrder: () => handlers.setState((state) => {
      return DEFAULT_ITEM_LIST.map((item) => {
        const orderedItem = state.find((ordered) => ordered.id === item.id);
        return {
          ...item,
          completed: orderedItem?.completed,
        };
      })
    }),
    setCompleted: (index: number, status?: CompletedState) => handlers.setItemProp(index, "completed", status)
  }), []);


  // biome-ignore lint/correctness/useExhaustiveDependencies: Infinite render when using handlers
  useEffect(() => {
    handlers.apply((item) => {
      let result = false;
      if (filters.name && !filterByName(item.name[i18n.language as Lang], filters.name)) {
        result = true;
      }

      if (filters.season.length && !filterBySeason(item.season, filters.season, filters.lastChance)) {
        result = true;
      }

      if (!filterByAchievement(item, filters.achivements)) {
        result = true;
      }

      if (!filterByBundle(item, filters.bundles)) {
        result = true;
      }

      if (filters.weather && !filterByWeather(item.weather, filters.weather)) {
        result = true;
      }

      if (filters.hideCompleted && item.completed === 'total') {
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

const filterBySeason = (season?: Season[], filter?: Season[], lastChange?: boolean) => {
  // Only show items that you have the last chance to get them by the selected season
  if (lastChange) {
    if (!season || !season.length || !filter || !filter.length) return false;
    return filter.some((elem) => elem === season.at(-1));
  }

  // Regular season filter
  if (!season || !season.length || !filter || !filter.length) return true;
  return filter.some((elem) => season.includes(elem));
};

const filterByAchievement = (item: Item, achivements: Record<AchivementType, boolean>) => {
  return item.requiredBy?.some((requiredBy) => requiredBy.type === 'bundle' || !!achivements[requiredBy.type]);
}

const filterByBundle = (item: Item, filter?: BundleId[]) => {
  if (!filter || !filter.length) return true;
  return item.requiredBy?.some((requiredBy) => requiredBy.type === 'bundle' && filter.includes(requiredBy.id));
}

const filterByWeather = (weather?: Weather[], filter?: Weather) => {
  if (!filter) return true;
  if (!weather || !weather.length) return false;
  return weather.includes(filter);
}


export default useListItems;
