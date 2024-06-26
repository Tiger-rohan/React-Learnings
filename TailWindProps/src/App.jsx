import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  let myObj ={
    username: "rohan",
    age: 25
  }

  return (
    <>
    <h1 className="bg-green-500 text-slate-500 p-4 rounded-xl mb-4">Tailwind test</h1>
    <Card />
    <Card />
    

   

    </>
  )
}

export default App
