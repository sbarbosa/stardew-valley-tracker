import { withImmer } from "jotai-immer";
import { atomWithStorage } from "jotai/utils";
import { load } from "src/utils/local-storage";
import type { AchivementType, BundleId, Season, Weather } from "./_types";

interface Filter {
  name: string;
  season: Season[];
  bundles: BundleId[];
  lastChance: boolean;
  achivements: Record<AchivementType, boolean>;
  weather?: Weather;
  hideCompleted: boolean;
}

const DEFAULT_VALUE: Filter = { name: "", season: [], bundles: [], lastChance: false, hideCompleted: false, achivements: { "Master_Angler": true } };
const storedValue: Filter = load("filter", DEFAULT_VALUE);

const filterAtom = atomWithStorage("filter", storedValue);
export default withImmer(filterAtom);
