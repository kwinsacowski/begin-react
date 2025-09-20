function TodoItem({ text, completed, priority}) {
  return (
    <li>
      {completed ? "✅" : "⬜"} {text} (Priority: {priority})
    </li>
  );
}

export default TodoItem;