import { createContext ,useReducer} from "react";
import AppName from "./AppName";
import Addtodo from "./Addtodo";
import Todoitems from "./Todoitems";


export let todoContext = createContext();


const todoitemsReducer = (todolist, action) => {
let newtodoitems = todolist;
if (action.type === "NEW_ITEM") {
  newtodoitems = [...todolist, action.payload];
  return newtodoitems;
} else if (action.type === "CUT_ITEM") {
  newtodoitems = todolist.filter((i, j) => j !== action.payload);
  return newtodoitems;
}
};
const Todoitemprovider = ({children}) => {
   let [todolist, dispatchtodolist] = useReducer(todoitemsReducer, []);

  
  
  let addnewItem = (event) => {
    const newItem = {
      type: "NEW_ITEM",
      payload: event,
    };
    dispatchtodolist(newItem);

  };
  let deleteItem = (todelete) => {
    const removeitem = {
      type: "CUT_ITEM",
      payload: todelete,
    };
    dispatchtodolist(removeitem);
  }


    return (

 <todoContext.Provider value={{todolist,addnewItem,deleteItem}}>
 {children}
 </todoContext.Provider>
  );
 }
 export default Todoitemprovider       