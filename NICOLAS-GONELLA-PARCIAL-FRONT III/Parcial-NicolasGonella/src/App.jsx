import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  const [bday, setBday] = useState({
    name: '',
    color: '', 
  })
  
  const [styles, setStyles] = useState({
    background: 'grey',
  })

  return (
    <>  
   
    <h1>Elige un color</h1>

      <Card bday={bday} setBday={setBday} setStyles={setStyles} styles={styles}/>

    </>
  )
}

export default App