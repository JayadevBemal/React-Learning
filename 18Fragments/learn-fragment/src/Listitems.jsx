import Item from "./Item";


const Listitems = ({items,bought,ButtonClick}) => {
  
  return (
    <ul className="list-group">
      {items.map((i) => (
        <Item  key={i} Listitems= {i} ButtonClick={ButtonClick} bought = {bought.includes(i)}></Item>
      ))}
    </ul>
  );
}

export default Listitems;
