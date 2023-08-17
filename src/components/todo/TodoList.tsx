import styled from "@emotion/styled";
import { todoFilteredAtom } from "../../stores/todo";
import { useAtomValue } from "jotai";
import { TodoItem } from ".";

const TodoListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
`;

function TodoList() {
    const filtered = useAtomValue(todoFilteredAtom);
    return (
        <TodoListStyled>
            {filtered.map((item) => (
                <TodoItem key={item.id} todo={item} />
            ))}
        </TodoListStyled>
    );
}

export { TodoList };
