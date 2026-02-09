import AppName from "./AppName";
import Addtodo from "./Addtodo";
import Todoitem1 from "./Todoitem1";
import './Style.css';

function App() {
  return <div>
         <AppName></AppName>
         <Addtodo></Addtodo>

         <div className="items">
         <Todoitem1></Todoitem1>
         <Todoitem1></Todoitem1>
         </div>
         
  </div>
}
export default App;
