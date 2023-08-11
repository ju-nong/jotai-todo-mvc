import { Filter } from "./type";
import { atom } from "jotai";

const filterState = atom<Filter>("all");

export { filterState };
