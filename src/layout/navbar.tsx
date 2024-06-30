import { Checkbox, CloseButton, Combobox, Group, Image, Input, InputBase, InputLabel, Stack, Switch, Text, Tooltip, useCombobox } from "@mantine/core";
import debounce from "debounce";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { WEATHER_LIST, SEASON_LIST, type Weather } from "src/data/_types";
import filterAtom from "src/data/filter-atom";
import { capitalizeFully } from "src/utils/strings";

import classes from "./style.module.scss";

export const NavBar = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useAtom(filterAtom);

  console.log('Filters: ', filter)

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const getWeatherLabel = (weather?: Weather, claseButton?: boolean) => {
    if (!weather) return null;

    const imgName = capitalizeFully(weather.replace("_", " ")).replace(" ", "");
    return (
      <Group>
        <Image src={`/img/Weather_${imgName}.gif`} w={20} h={20} />
        <Text size="sm" flex={1}>{t(`weather.${weather}`)}</Text>
        {claseButton && (
          <CloseButton
            size="sm"
            component="a"
            radius={4}
            onClick={(event) => {
              event.stopPropagation();
              setFilter((data) => { data.weather = undefined });
              combobox.closeDropdown();
            }} />
        )}
      </Group>
    );
  }

  const onSeasonChange = debounce((value) => {
    setFilter((data) => {
      data.season = value;

      if (!value || !value.length) {
        data.lastChance = false;
      }
    })
  }, 300);

  return (
    <Stack gap="xl" className={classes.navbar}>

      {/* SEASON */}
      <Checkbox.Group
        defaultValue={filter.season ?? []}
        label={t("filter.season")}
        classNames={{ label: classes.season_filter }}
        onChange={onSeasonChange}
      >
        <Stack mt="xs">
          {SEASON_LIST.map((season) => (
            <Checkbox key={season} value={season} label={t(`season.${season}`)} />
          ))}
        </Stack>
      </Checkbox.Group>

      {/* SEASON: Last Chance */}
      <Tooltip label={t('filter.season.lastChance.tooltip')} refProp="rootRef">
        <Switch
          label={t('filter.season.lastChance')}
          checked={filter.lastChance}
          disabled={!filter.season.length}
          onChange={() => setFilter((data) => { data.lastChance = !data.lastChance })}
        />
      </Tooltip>

      {/* Weather */}
      <Combobox
        store={combobox}
        onOptionSubmit={(value) => {
          setFilter((data) => { data.weather = (value as Weather) });
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <InputBase
            label={t('filter.weather')}
            classNames={{ label: classes.weather_filter }}
            component="button"
            type="button"
            pointer
            rightSection={<Combobox.Chevron />}
            rightSectionPointerEvents="none"
            onClick={() => combobox.toggleDropdown()}
          >
            {getWeatherLabel(filter.weather, true) || <Input.Placeholder>{t('filter.weather.placeholder')}</Input.Placeholder>}
          </InputBase>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>
            {WEATHER_LIST.map((weather) => (
              <Combobox.Option key={weather} value={weather}>
                {getWeatherLabel(weather)}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>


      {/* Achivements */}
      <Stack>
        <InputLabel size="md">{t('filter.achivements.label')}</InputLabel>
        <Switch
          label={t('filter.achivements.masterAngler')}
          checked={!!filter.achivements.master_angler}
          onChange={() => setFilter((data) => { data.achivements.master_angler = !data.achivements.master_angler })}
        />
      </Stack>


    </Stack>
  );
}
