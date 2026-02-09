import ClockHeading from './ClockHeading';
import ClockMoto from './ClockMoto';
import ClockTime from './ClockTime';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  

  return <div style= {{'textAlign':'center'}}>
    
    <ClockHeading></ClockHeading>
    <ClockMoto></ClockMoto>
    <ClockTime></ClockTime>

  </div>
}

export default App
