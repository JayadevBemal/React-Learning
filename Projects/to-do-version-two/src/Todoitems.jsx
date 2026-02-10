import TodoItem from "./TodoItem";

const Todoitems = ({todoitems}) =>
{
console.log(todoitems);
  return <div >
   {todoitems.map((i)=>  <TodoItem
          todoDate={i.date}
          todoName={i.name}
        ></TodoItem>)}
       
      </div>

}

export default Todoitems