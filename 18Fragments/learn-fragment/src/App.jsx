import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Listitems from "./Listitems";
import Cndt from "./Varstore";
import Item from "./Item";
import Container from "./Container";


function App() {
let foodItems = ['Banana','Apple','Mango','Orange','Pine-Apple'];

  return (<>
    <Container>
      <h1 className="jb-heading">Healthy Fruits</h1>
      {<Cndt items = {foodItems}></Cndt>}
      <Listitems items = {foodItems}></Listitems>
    </Container>

    <Container>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est modi consequuntur, debitis, cum vel, maxime quia aliquam cupiditate enim delectus ratione? Dolorum, delectus! Explicabo odio accusantium quos quod temporibus obcaecati libero ex, nam nostrum corrupti? Quaerat incidunt qui pariatur dolore!</p>
    </Container>
  </>);
}

export default App;
