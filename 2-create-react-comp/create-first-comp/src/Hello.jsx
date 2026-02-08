function Hello() {
  let test = "home";
  let myFn = () => {
    return 'New Delhi'
  }
  return <div>The Future {myFn()}</div>
}

export default Hello;