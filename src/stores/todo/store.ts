import { Todo } from "./type";
import { atom } from "jotai";
import { filterAtom } from "../filter";

const todoAtom = atom<Todo[]>([]);

// 필터링된 Todo
const todoFilteredAtom = atom<Todo[]>((get) => {
    const filter = get(filterAtom);
    const todo = get(todoAtom);

    switch (filter) {
        case "active":
            return todo.filter((item) => !item.completed);
        case "completed":
            return todo.filter((item) => item.completed);
        default:
            return todo;
    }
});

export { todoAtom, todoFilteredAtom };
