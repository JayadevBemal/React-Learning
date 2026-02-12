import style from './FoodInput.module.css'

const FoodInput = ({inputHandle}) => {

  return <input className={style.foodInput}  type="text" placeholder="Enter Food Item" onChange={inputHandle} />
}

export default FoodInput