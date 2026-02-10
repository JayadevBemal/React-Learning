
import './App.css'
import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  

  return (
    <>
     <div className={styles.calcContainer}>
      <div className={styles.inputBox}><input type="text" /></div>
      <div className={styles.buttonContainer}>
        <button className={styles.btn}>Button</button>
      
       <button type="button" className={`btn btn-light ${styles.btn}`}>Light</button>
       
       <button type="button" className={`btn btn-light ${styles.btn}`}>Light</button>
       
       <button type="button" className={`btn btn-light ${styles.btn}`}>Light</button>
       
       <button type="button" className={`btn btn-light ${styles.btn}`}>Light</button>
       
       <button type="button" className={`btn btn-light ${styles.btn}`}>Light</button>
       
       <button type="button" className={`btn btn-light ${styles.btn}`}>Light</button>
       
       <button type="button" className={`btn btn-light ${styles.btn}`}>Light</button>
       
      </div>
     </div>
    </>
  )
}

export default App
