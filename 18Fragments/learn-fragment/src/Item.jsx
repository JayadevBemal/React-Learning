import styles from './Item.module.css'

const Item = ({Listitems}) => {
console.log(styles)
  return <li className= {`${styles["jb-item"]} list-group-item`} >
          <span className={`${styles["jb-span"]}`}>{Listitems}</span>
        </li> 
}
export default Item;