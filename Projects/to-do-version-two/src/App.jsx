import AppName from "./AppName";
import Addtodo from "./Addtodo";
import Todoitems from "./Todoitems";
import "./Style.css";
import { useState } from "react";

function App() {
  let [enteredname, setenteredname] = useState("");
  let [entereddate, setentereddate] = useState("");

  let namefun = (item) => {
    setenteredname(item.target.value);
  };
  let datefun = (item) => {
    setentereddate(item.target.value);
  };

  let [todolist, settodolist] = useState([]);



  let buttonclickadd = () => {
    let newOne = { name: enteredname, date: entereddate };
    settodolist((prev) => [...prev, newOne]);
  
    setenteredname("")
    setentereddate("")
  };

  let buttonclickdelete = (deleteindex) => {
    settodolist(prev => prev.filter((item,index) => index !== deleteindex))
  }

  return (
    <div className="body">
      <AppName></AppName>
      <Addtodo
        enteredname={namefun}
        entereddate={datefun}
        buttonclick={buttonclickadd}
        blankname = {enteredname}
        blankdate = {entereddate}

      ></Addtodo>
      <Todoitems items={todolist} deletetodo={buttonclickdelete}></Todoitems>
    </div>
  );
}
export default App;
