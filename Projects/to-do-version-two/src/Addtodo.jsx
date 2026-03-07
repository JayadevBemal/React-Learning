import style from './Addtodo.module.css'
import { RiAddCircleFill } from "react-icons/ri";
function Addtodo( {enteredname,entereddate,buttonclick,blankname,blankdate}){

  return <div className="container text-center ">
        <div className={`row align-items-center g-3 ${style.todoBox}`}>
          <div className="col-5"><input className={style.addTodo} type="text" name="" id="" placeholder="Enter todo here" onChange={enteredname} value={blankname}/></div>
          <div className="col-5"><input className={style.addTodo} type="date" onChange={entereddate} value={blankdate} /></div>
          <div className="col-2 jb-button">
            <button type="button" className="btn btn-success jb-button w-100 " onClick={buttonclick}  disabled={blankname.trim() === "" || blankdate === ""}>
              <RiAddCircleFill />
            </button>
          </div>
        </div>
        </div>
      
}

export default Addtodo;