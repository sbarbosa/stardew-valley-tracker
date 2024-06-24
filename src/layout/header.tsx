import { Burger, Flex, Stack, Text, Title } from "@mantine/core"
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "src/components/language-switcher";
import ThemeSwitcher from "src/components/theme-switcher";

import classes from "./style.module.scss";

interface Props {
  opened: boolean;
  toggle: () => void;
}

export const Header = ({ opened, toggle }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
      />
      <Stack className={classes.logo} align="center">
        <Text size="xs">Stardew Valley</Text>
        <Title order={4}>{t('app.title')}</Title>
      </Stack>

      <Flex gap="sm">
        <LanguageSwitcher size="sm" />
        <ThemeSwitcher size="sm" />
      </Flex>
    </>
  )
}
