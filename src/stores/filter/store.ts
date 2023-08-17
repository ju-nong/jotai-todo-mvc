import { Filter } from "./type";
import { atom } from "jotai";

const filterAtom = atom<Filter>("all");

export { filterAtom };
