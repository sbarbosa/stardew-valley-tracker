import { withImmer } from "jotai-immer";
import { atomWithStorage } from "jotai/utils";
import { load } from "src/utils/local-storage";
import type { Season, Weather } from "./_types";

interface Filter {
  name: string;
  season: Season[];
  lastChance: boolean;
  masterAngler: boolean;
  weather?: Weather;
}

const DEFAULT_VALUE = { name: "", season: [], lastChance: false, masterAngler: true };
const storedValue: Filter = load("filter", DEFAULT_VALUE);

const filterAtom = atomWithStorage("filter", storedValue);
export default withImmer(filterAtom);
