import styles from './Item.module.css'

const Item = ({Listitems,ButtonClick}) => {

  return <li className= {`${styles["jb-item"]} list-group-item list-group-item-action`} >
            <span className={`${styles["jb-span"]}`}>{Listitems}</span> <button className={`btn btn-info ${styles.btnBh}`} onClick={()=> ButtonClick(Listitems)} >Buy</button>
        </li> 
    
} 

export default Item;