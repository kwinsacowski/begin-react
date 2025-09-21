import {MouseEvent} from "react";

function TodoItem(){
  let tasks = [
    {text: "Practice ES6", done: true},
    {text: "Master  Use-State",done: false},
    {text:"Shower", done: false},
    {text: "Master React", done: false},
  ];

   return (
    <>
    <h3>To Do Items</h3>
    {tasks.length === 0 && <p>You are all caught up!</p>}
    <ul className = "list-group">
      {tasks.map((task) => (
        <li key={task.text} onClick ={handleClick}>{task.text}</li>
        ))}
    </ul>
    </>
  );
}

export default TodoItem;
