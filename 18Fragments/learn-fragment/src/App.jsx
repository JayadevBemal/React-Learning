import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Listitems from "./Listitems";
import Cndt from "./Varstore";
import FoodInput from "./FoodInput";
import Container from "./Container";


function App() {
let foodItems = ['Banana','Apple','Mango','Orange','Pine-Apple'];

const [textState,setTextState] = useState("Food entered by user");
const ButtonClick = (item) => alert(`${item} is being bought.`);
const handleInput = (event) =>setTextState(event.target.value);

  return (<>
    <Container>
      <h1 className="jb-heading">Healthy Fruits</h1>
      <p>{textState}</p>
      <FoodInput inputHandle={handleInput}></FoodInput>
      {<Cndt items = {foodItems}></Cndt>}
   <Listitems items = {foodItems} ButtonClick={ButtonClick}></Listitems>
    </Container>

    <Container>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est modi consequuntur, debitis, cum vel, maxime quia aliquam cupiditate enim delectus ratione? Dolorum, delectus! Explicabo odio accusantium quos quod temporibus obcaecati libero ex, nam nostrum corrupti? Quaerat incidunt qui pariatur dolore!</p>
    </Container>
  </>);
}

export default App;
