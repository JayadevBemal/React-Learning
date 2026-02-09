import Item from "./Item";


const Listitems = ({items}) => {
  
  return (
    <ul className="list-group">
      {items.map((i) => (
        <Item key={i} Listitems= {i}></Item>
      ))}
    </ul>
  );
}

export default Listitems;
