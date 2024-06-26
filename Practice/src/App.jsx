import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("clicked", counter)
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Redux Todo</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
