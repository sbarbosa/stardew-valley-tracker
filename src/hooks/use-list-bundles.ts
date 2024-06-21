import { useAtom } from "jotai";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import BUNDLES from "src/data/_bundles";
import ITEMS_MAP from "src/data/_items";
import type { Bundle, Season } from "src/data/_types";
import filterAtom from "src/data/filter-atom";

export const useListBundles = () => {
  const { i18n } = useTranslation();
  const [filters] = useAtom(filterAtom);

  // Filters list
  return useMemo(() => {
    if (!filters.name && !filters.season.length) return BUNDLES;

    const result: Bundle[] = [];

    for (const bundle of BUNDLES) {
      const items = bundle.items.filter((bundleItem) => {
        const item = ITEMS_MAP[bundleItem.id];

        if (filters.name && !filterByName(item.name[i18n.language], filters.name)) {
          return false;
        }

        if (filters.season.length && !filterBySeason(item.season, filters.season)) {
          return false;
        }

        return true;
      });

      if (items.length > 0) {
        result.push({
          ...bundle,
          items,
        });
      }
    }

    return result;
  }, [filters, i18n.language]);
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
