import { Card, type CardProps, Group, Text, Image } from "@mantine/core";
import { BUNDLE_LIST, type AchivementType, type BundleId, type Item, type ItemId } from "src/data/_types";
import ItemName from "./item-name";
import ItemIcon from "./item-icon";
import BUNDLE_MAP from "src/data/_bundles";

const ITEMS_MAP: Record<ItemId, Item> = {} as Record<ItemId, Item>;

interface Props extends CardProps {
  achievementType: AchivementType;
  onClose: () => void;
}

const Achievement = ({ achievementType, onClose }: Props) => {
  return null;
};

export default Achievement;
