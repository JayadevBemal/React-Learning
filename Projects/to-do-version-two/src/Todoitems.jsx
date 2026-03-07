import TodoItem from "./TodoItem";

const Todoitems = ({items,deletetodo}) =>
{

 console.log(items)

  return <div >
   {items.map((item,index)=>  <TodoItem
          todoDate={item.date}
          todoName={item.name}
          deletetodo={()=> deletetodo(index)}
          key={index}
         ></TodoItem>)}
       
      </div>

}

export default Todoitems