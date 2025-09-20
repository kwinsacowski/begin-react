import Header from "./Header.jsx";
import Message from "./Message.jsx"; 
import Footer from "./Footer.jsx";
import Welcome from "./Welcome.jsx";
import TodoItem from "./TodoItem.jsx";
import State from "./State.jsx";
import Counter from "./Counter.jsx";

function App() {
  return (
    <div>
      <Header />
      <p>Welcome to your first React app!</p>
      <p><Welcome name="Michael" age ="29" /></p>
    <div><Message /></div>
    <ul>
      <State />
    </ul>
    <p>On an <em>Unrelated</em> note....</p>
    <div><Counter /></div>
    <div><Footer /></div>
    </div>
  );
}

export default App;
