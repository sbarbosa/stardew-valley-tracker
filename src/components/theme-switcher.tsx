import { useTranslation } from "react-i18next";
import { ActionIcon, type MantineSize, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";

import WeatherNightIcon from 'src/assets/icons/weather-night.svg';
import WeatherSunnyIcon from 'src/assets/icons/weather-sunny.svg';

interface Props {
  size?: MantineSize | (string & {}) | number;
  disabled?: boolean;
}

export const ThemeSwitcher = ({ size = "md", disabled }: Props) => {
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  const { setColorScheme } = useMantineColorScheme();

  const { t } = useTranslation();

  const isLight = computedColorScheme === "light";

  return (
    <ActionIcon
      onClick={() => setColorScheme(isLight ? "dark" : "light")}
      variant="transparent"
      disabled={disabled}
      size={size}
      aria-label={t("theme.toggleColorScheme")}
      color={isLight ? "dark" : "gray"}
    >
      {isLight ? <WeatherNightIcon /> : <WeatherSunnyIcon />}
      {/* <Icon path={isLight ? mdiWeatherNight : mdiWeatherSunny} /> */}
    </ActionIcon>
  );
};
