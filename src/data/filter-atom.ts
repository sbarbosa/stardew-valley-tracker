import { withImmer } from "jotai-immer";
import { atomWithStorage } from "jotai/utils";
import { load } from "src/utils/local-storage";
import type { AchivementType, Season, Weather } from "./_types";

interface Filter {
  name: string;
  season: Season[];
  lastChance: boolean;
  achivements: Record<AchivementType, boolean>;
  weather?: Weather;
}

const DEFAULT_VALUE: Filter = { name: "", season: [], lastChance: false, achivements: { "master_angler": true } };
const storedValue: Filter = load("filter", DEFAULT_VALUE);

const filterAtom = atomWithStorage("filter", storedValue);
export default withImmer(filterAtom);
