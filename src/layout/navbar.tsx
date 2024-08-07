import { Checkbox, CloseButton, Combobox, Group, Image, Input, InputBase, InputLabel, MultiSelect, Stack, Switch, Text, Tooltip, useCombobox } from "@mantine/core";
import debounce from "debounce";
import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { WEATHER_LIST, SEASON_LIST, BUNDLE_LIST, type Weather, type Season, type BundleId } from "src/data/_types";
import filterAtom from "src/data/filter-atom";
import { capitalizeFully } from "src/utils/strings";

const BASE_URL = import.meta.env.BASE_URL;

import classes from "./style.module.scss";
import Notes from "src/components/notes";

export const NavBar = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useAtom(filterAtom);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const getWeatherLabel = (weather?: Weather, claseButton?: boolean) => {
    if (!weather) return null;

    const imgName = capitalizeFully(weather.replace("_", " ")).replace(" ", "");
    return (
      <Group>
        <Image src={`${BASE_URL}/img/Weather_${imgName}.gif`} w={20} h={20} />
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

  const onSeasonChange = (value: string[]) => {
    setFilter((data) => {
      data.season = (value as Season[]);

      if (!value || !value.length) {
        data.lastChance = false;
      }
    })
  };

  const onBundleChange = debounce((value: string[]) => {
    setFilter((data) => {
      data.bundles = (value as BundleId[]);
    });
  }, 400);

  return (
    <Stack justify="space-between" h={"100%"}>
      <Stack gap="xl" className={classes.navbar}>

        {/* General */}
        <Stack>
          <InputLabel size="md" fw="bold">{t('filter.general')}</InputLabel>
          <Switch
            label={t('filter.general.hideCompleted')}
            checked={!!filter.hideCompleted}
            onChange={() => setFilter((data) => { data.hideCompleted = !data.hideCompleted })}
          />
        </Stack>

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

        {/* Bundles */}
        <Stack>
          <InputLabel size="md" fw="bold">{t('filter.bundle')}</InputLabel>
          <MultiSelect
            placeholder={t('filter.bundle.placeholder')}
            defaultValue={filter.bundles ?? []}
            data={BUNDLE_LIST.map(bundle => ({ value: bundle, label: t(`bundle.${bundle}`) }))}
            onChange={onBundleChange}
            hidePickedOptions
            renderOption={({ option }) => (
              <Group gap="sm" wrap="nowrap">
                <Image src={`${BASE_URL}/img/${option.value}.png`} w={20} h={20} radius="sm" />
                <Text size="sm">{option.label}</Text>
              </Group>
            )}
          />
        </Stack>

        {/* Achivements */}
        <Stack>
          <InputLabel size="md" fw="bold">{t('filter.achivements.label')}</InputLabel>
          <Switch
            label={t('achivements.Master_Angler')}
            checked={!!filter.achivements.Master_Angler}
            onChange={() => setFilter((data) => { data.achivements.Master_Angler = !data.achivements.Master_Angler })}
          />
        </Stack>

      </Stack>

      <Notes />
    </Stack>
  );
}
