import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Listitems from "./Listitems";
import Cndt from "./Varstore";
import FoodInput from "./FoodInput";
import Container from "./Container";
import Item from "./Item";


function App() {
// let foodItems = ['Banana','Apple','Mango','Orange','Pine-Apple'];

let [foodItems,setTextState] = useState(['Banana','Apple','Mango','Orange','Pine-Apple']);

let [boughtitems,setboughtitems] = useState([]);

let handlebuy = (item) => {

  if(boughtitems.includes(item)){

    let newremove = boughtitems.filter(i => i !== item );
    setboughtitems(newremove);

  }else{

    setboughtitems(prev => [...prev,item]);
  }
  
}



let handleInput = (event) => {
  if(event.key === 'Enter'){
    let newItem = event.target.value;
    setTextState(prev => [...prev,newItem]);
    event.target.value = "";

    }

    
}                  

  return (<>
    <Container>
      <h1 className="jb-heading">Healthy Fruits</h1>
      <FoodInput inputHandle={handleInput}></FoodInput>
      {<Cndt items = {foodItems}></Cndt>}
   <Listitems items = {foodItems} ButtonClick={handlebuy} bought={boughtitems} ></Listitems>
    </Container>

    <Container>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est modi consequuntur, debitis, cum vel, maxime quia aliquam cupiditate enim delectus ratione? Dolorum, delectus! Explicabo odio accusantium quos quod temporibus obcaecati libero ex, nam nostrum corrupti? Quaerat incidunt qui pariatur dolore!</p>
    </Container>
  </>);

}

export default App;
