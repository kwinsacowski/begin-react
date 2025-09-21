import { useState } from "react";

function TodoItem() {
  const [tasks, setTasks] = useState([
    { text: "Practice ES6", done: true },
    { text: "Master Use-State", done: false },
    { text: "Shower", done: false },
    { text: "Master React", done: false },
  ]);

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <>
      <h3>To Do Items</h3>
      {tasks.length === 0 && <p>You are all caught up!</p>}
      <ul>
        {tasks.map((task, i) => (
          <li key={i} onClick={() => toggleTask(i)}>
            {task.done ? "✅" : "⬜"} {task.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoItem;


