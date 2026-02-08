function Random() {

  let num = Math.random();
  return <div style = {{'background-color':'red'}}>
    Random number is : {num}
  </div>
}

export default Random;