// let app = "Todo+";
// let count = 0;
// count++;
// console.log(count);


// let triple = x => x * 3;
// console.log(triple(5));

// const anem ="Mona";
// const  tasks = 5;
// const msg = `Hello ${anem}, you have ${tasks} tasks.`;
// console.log(msg);

// // const {id, text, completed} = todo;

// const arr = [10, 20, 30 , 40];
// let a = arr.filter(n => n === 10);
// let b = arr.filter(n => n === 20);
// let others = arr.filter (n => n != a && n != b);
// console.log(a);
// console.log(b);
// console.log(others);

// const topics = ["HTML", "CSS", "JS"];
// const newTopics = [...topics, "React"];
// console.log(newTopics);

// const base = { theme: "light", items: 0 };
// const override = { items: 3 };
// const settings = { ...base, ...override };
// console.log(settings);

// const todos = [
//   { id: "a", text: "Read",  completed: false },
//   { id: "b", text: "Cook",  completed: true  },
// ];
// const completedTodos = todos.map(t => `${t.completed ? "[x]" : "[ ]"} ${t.text}`);
// console.log(completedTodos);

// const todosTwo = [
//   { id: "a", text: "Read" },
//   { id: "b", text: "Cook" },
//   { id: "c", text: "Sleep" },
// ];
// const results = todosTwo.filter( t => t.id !== "b");
// console.log(results);

// function numberToString(num) {
//     return num.toString();
// }
// console.log(numberToString(5));


// function evenOrOdd(number) {
//   return (number % 2 === 0 ? "Even" : "Odd");
// }
// console.log(evenOrOdd(4));

// const todos = [
//   { id: "a", text: "Read", completed: false },
//   { id: "b", text: "Cook", completed: true  },
// ];
// const result = todos.map( t => t.id === "a" ? {...t, completed: !t.completed } : t);
// console.log(result);

// const todos = [
//   { id: "a", text: "Read" },
//   { id: "b", text: "Cook" },
//   { id: "c", text: "Sleep" },
// ];
// const missing = todos.filter ( t => t.id !== "b");
// console.log(missing);

// const user = { id: 1, name: "Sara", secret: "xyz" };
// const { secret, ...removed} = user;
// console.log(removed);

// const todos = [
//   { id: "a", text: "  Learn  " },
//   { id: "b", text: " ES6 " },
// ];
// const newArr = todos.map( t => ({text: t.text.trim().toLowerCase()}));
// console.log(newArr);

// function addUnique(todos,text){
//     const trimmed = text.trim();
//     if (trimmed(text) === "") 
//         return todos;
    
//     const exists = todos.some(t => t.text.toLowerCase() === trimmed.toLowerCase());
//     if (exists) return todos;

//     const newTodo = {
//         id: crypto.randomUUID?.() || Date.now().toString(),
//         text: trimmed,
//         completed: false,
//     };
//     return [...todos, newTodo];     
//     };

// function replaceById(list, id, patch) {
//     const newList = list.map (item => (item.id === id ? {...item, ...patch} : item));
// }


// const todos = [
//   { id: "a", text: "react",    completed: false },
//   { id: "b", text: "cooking",  completed: true  },
//   { id: "c", text: "reading",  completed: false },
// ];

// const expression = todos.map (item => !item.completed ? (item.sort().toUpperCase()) : "");
// console.log(expression);

const name = data?.user?.profile?.name ?? "Guest";