import styles from './ButtonItem.module.css'

const ButtonItem = () => {
let buttonArray= ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];


  return <div>{buttonArray.map((i) => 
    <button type="button" key={i} className={`btn btn-light ${styles.btn}`} >{i}</button>
  )}
       
      </div> 

}

export default ButtonItem;
