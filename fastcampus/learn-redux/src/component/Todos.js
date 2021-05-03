import React, { useState } from "react";

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{
        textDecoration: todo.done ? "line-through" : "none",
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

//이번에는 상태를 redux에서 안하고 로컬에서 해주기로함
function Todos({ todos, onCreate, onToggle }) {
  const [text, SetText] = useState("");
  const onChage = (e) => SetText(e.target.value);
  const onSubmit = (e) => {
    //새로고침 방지
    e.preventDefault();
    onCreate(text);
    SetText("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          onChange={onChage}
          placeholder="할일을 입력해주세요"
        />
        <button type="submit">등록</button>
        <TodoList todos={todos} onToggle={onToggle} />
      </form>
    </div>
  );
}
export default React.me(Todos);
