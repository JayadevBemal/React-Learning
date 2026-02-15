import Item from "./Item";


const Listitems = ({items,ButtonClick}) => {
  
  return (
    <ul className="list-group">
      {items.map((i) => (
        <Item  key={i} Listitems= {i} ButtonClick={ButtonClick}></Item>
      ))}
    </ul>
  );
}

export default Listitems;
