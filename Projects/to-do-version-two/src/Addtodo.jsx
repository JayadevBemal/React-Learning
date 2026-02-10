import style from './Addtodo.module.css'

function Addtodo(){

  return <div className="container text-center ">
        <div className={`row ${style.todoBox}`}>
          <div className="col-6"><input className={style.addTodo} type="text" name="" id="" placeholder="Enter todo here" /></div>
          <div className="col-4"><input className={style.addTodo} type="date"  /></div>
          <div className="col-2 jb-button">
            <button type="button" className="btn btn-success jb-button ">
              Add
            </button>
          </div>
        </div>
        </div>
      
}

export default Addtodo;