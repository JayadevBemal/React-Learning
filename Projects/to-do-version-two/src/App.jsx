import AppName from "./AppName";
import Addtodo from "./Addtodo";
import TodoItem from "./TodoItem";
import Todoitems from "./Todoitems";
import "./Style.css";

function App() {

 const todolist = [{ name: "Bhubaneswar", date: "24/02/2026" },{ name: "Bhubaneswar", date: "24/02/2026" },{ name: "Bhubaneswar", date: "24/02/2026" },{ name: "Bhubaneswar", date: "24/02/2026" }];

  return (<div className="body">
    
      <AppName></AppName>
      <Addtodo></Addtodo>
      <Todoitems todoitems={todolist}></Todoitems>

      
    </div>
  );
}
export default App;
