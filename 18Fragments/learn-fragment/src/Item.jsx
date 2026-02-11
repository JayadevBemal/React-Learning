import styles from './Item.module.css'
import Listitems from './Listitems'



const Item = ({Listitems}) => {

const ButtonClick = () => {
  alert(`${Listitems} bought`)
}
  return <li className= {`${styles["jb-item"]} list-group-item`} >
            <span className={`${styles["jb-span"]}`}>{Listitems}</span> <button className={`btn btn-info ${styles.btnBh}`} onClick={ButtonClick}>Buy</button>
        </li> 
    
} 

export default Item;