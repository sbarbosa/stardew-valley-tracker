import { useTranslation } from "react-i18next";
import { type FunctionComponent, type SVGAttributes, useMemo, useState } from "react";
import { ActionIcon, type MantineSize, Menu } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import * as flags from "src/assets/images/flags";

const FLAG_BY_LANG: { [key: string]: FunctionComponent<SVGAttributes<SVGElement>> } = {
  es: flags.es,
  en: flags.us,
};

interface Props {
  size?: MantineSize | (string & {}) | number;
  disabled?: boolean;
}

const LanguageSwitcher = ({ size = "md", disabled }: Props) => {
  const { t, i18n } = useTranslation();
  const [_, storeLanguage] = useLocalStorage<string>({ key: "lang", defaultValue: i18n.language });
  const [lang, setLang] = useState<string>(i18n.language);
  const languages = useMemo<string[]>(() => Object.keys(i18n.services.resourceStore.data), [i18n]);

  const items = languages.map((key) => ({
    id: key,
    name: t(`lang.${key}`),
    flag: FLAG_BY_LANG[key] || flags.unknown,
  }));

  const selected = items.find((item) => item.id === lang);

  const onChange = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
      setLang(lang);
      storeLanguage(lang);
    });
  };

  const SelectedFlag = selected?.flag;

  return (
    <Menu position="top-end" withinPortal>
      <Menu.Target>
        <ActionIcon variant="transparent" disabled={disabled} size={size} aria-label={t("lang.switch")}>
          {SelectedFlag && (
            <SelectedFlag />
          )}
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        {items.map(({ id, name, flag: Flag }) => (
          <Menu.Item leftSection={<Flag width={18} height={18} />} onClick={() => onChange(id)} key={id}>
            {name}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default LanguageSwitcher;