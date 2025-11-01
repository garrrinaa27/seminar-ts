import React from "react";

type TodoItemProps = {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ text, completed, onToggle, onDelete }) => {
  return (
    <li
      style={{
        textDecoration: completed ? "line-through" : "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
      }}
    >
      <span>{text}</span>
      <div>
        <button onClick={onToggle} style={{ marginRight: "8px" }}>
          {completed ? "Отменить" : "Готово"}
        </button>
        <button onClick={onDelete}>Удалить</button>
      </div>
    </li>
  );
};

export default TodoItem;