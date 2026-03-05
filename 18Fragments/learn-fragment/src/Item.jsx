import styles from './Item.module.css'

const Item = ({Listitems,bought,ButtonClick}) => {

  return <li className= {`${styles["jb-item"]} list-group-item list-group-item-action ${bought ? "active" :null}`}  >
            <span className={`${styles["jb-span"]}`}>{Listitems}</span> <button className={`btn btn-info ${styles.btnBh}`} onClick={()=> ButtonClick(Listitems)} > {bought ? "REMOVE":"BUY"} </button>
        </li>
    
} 

export default Item; 