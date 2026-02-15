import style from './FoodInput.module.css'

const FoodInput = ({inputHandle}) => {

  return <input className={style.foodInput}  type="text" placeholder="Enter Food Item" onKeyDown={inputHandle} />
}

export default FoodInput