import React from "react";

interface TodoItem {
  item: { id: number; name: string }[];
}

const TodoList: React.FunctionComponent<TodoItem> = (prop) => {
  return (
    <ul>
      {prop.item.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  );
};

export default TodoList;
