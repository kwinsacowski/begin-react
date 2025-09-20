import { useState } from "react";

function State () {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice ES6", completed: true }
  ]);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.completed ? "✅" : "⬜"} {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default State;