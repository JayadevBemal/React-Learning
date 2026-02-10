import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Listitems from "./Listitems";
import Cndt from "./Varstore";
import Item from "./Item";


function App() {
let foodItems = ['Banana','Apple','Mango','Orange','Pine-Apple'];

  return (
    <React.Fragment>
      <h1 className="jb-heading">Healthy Fruits</h1>
      {<Cndt items = {foodItems}></Cndt>}
      <Listitems items = {foodItems}></Listitems>
    </React.Fragment>
  );
}

export default App;
