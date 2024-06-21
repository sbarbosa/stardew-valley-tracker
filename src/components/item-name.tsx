import { Anchor, Group, Text, type TextProps } from "@mantine/core";
import { ItemIcon } from "./item-icon";
import type { ItemQuality, MultyLangText } from "src/data/_types";
import { useTranslation } from "react-i18next";
import type { i18n } from "i18next";

import OpenInNew from 'src/assets/icons/open-in-new.svg';

interface Props extends TextProps {
  name: MultyLangText;
  kind?: string;
  icon: string;
  quality?: ItemQuality | ItemQuality[];
  link?: boolean;
}

const getLinkDestination = (i18n: i18n, name: MultyLangText) => {
  let prefix = "";
  if (name[i18n.language]) {
    prefix = i18n.language === 'en' ? "" : `${i18n.language}.`;
  }

  return `https://${prefix}stardewvalleywiki.com/${(name[i18n.language] || name.en).replace(/\s/g, '_')}`
}

export const ItemName = ({ name, icon, quality, kind, link, ...props }: Props) => {
  const { t, i18n } = useTranslation();

  const itemName = name[i18n.language] || name.en;

  return (
    <Group gap="xs">
      <ItemIcon icon={icon} quality={quality} kind={kind} />
      {link ? (
        <Anchor href={getLinkDestination(i18n, name)} target="_blank" underline="hover">{itemName} <OpenInNew width="0.75rem" /></Anchor>
      ) : (
        <Text fw={500} {...props}>{itemName}</Text>
      )}
      {kind && (
        <Text>({t(`item.kind.${kind.toLowerCase()}`)})</Text>
      )}
    </Group>
  );
}
