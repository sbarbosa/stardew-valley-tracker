import { createStore } from "jotai/vanilla";
import type { Atom, WritableAtom } from "jotai/vanilla";

export interface Store {
  get: <Value>(atom: Atom<Value>) => Value;
  set: <Value_1, Args extends unknown[], Result>(atom: WritableAtom<Value_1, Args, Result>, ...args: Args) => Result;
  sub: (atom: Atom<unknown>, listener: () => void) => () => void;
}

export const store = createStore();
