import { Anchor, Group, Text, type TextProps } from "@mantine/core";
import ItemIcon from "./item-icon";
import type { ItemQuality, Lang, MultyLangText } from "src/data/_types";
import { useTranslation } from "react-i18next";
import type { i18n } from "i18next";

import OpenInNew from 'src/assets/icons/open-in-new.svg';
import classes from "./style.module.scss";

interface Props extends TextProps {
  name: MultyLangText;
  kind?: string;
  icon: string;
  quality?: ItemQuality | ItemQuality[];
  link?: boolean;
}

const getItemName = (name: MultyLangText, i18n: i18n) => {
  return name[i18n.language as Lang] || name.en;
}

const getLinkDestination = (i18n: i18n, itemName: string) => {
  const prefix = i18n.language === 'en' ? "" : `${i18n.language}.`;

  return `https://${prefix}stardewvalleywiki.com/${itemName.replace(/\s/g, '_')}`
}

const ItemName = ({ name, icon, quality, kind, link, ...props }: Props) => {
  const { t, i18n } = useTranslation();

  const itemName = getItemName(name, i18n);

  return (
    <Group gap="xs" wrap="nowrap">
      <ItemIcon icon={icon} quality={quality} kind={kind} />
      {link ? (
        <Anchor href={getLinkDestination(i18n, itemName)} target="_blank" underline="hover" className={classes.item_name}>{itemName} <OpenInNew width="0.75rem" /></Anchor>
      ) : (
        <Text fw={500} {...props} className={classes.item_name}>{itemName}</Text>
      )}
      {kind && (
        <Text>({t(`item.kind.${kind.toLowerCase()}`)})</Text>
      )}
    </Group>
  );
}

export default ItemName;
