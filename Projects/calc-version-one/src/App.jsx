
import './App.css';
import Container from './ButtonContainer';
import Display from './Display';
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  

  return (
    <>
     <div className={styles.calcContainer}>
       <Display></Display>
       <Container></Container>
     </div>
    </>
  )
}

export default App
