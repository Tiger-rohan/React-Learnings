// import { useState,useEffect,useCallback } from 'react';
// import './App.css'

// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [characterAllowed, setCharacterAllowed] = useState(false);
//   const [Password, setPassword] = useState('')

// const PasswordGenerator = useCallback(()=>{
//   let pass=""
//   let str="ABCDEFGHIJKLMPNOQRSTUVWXYZabcdefghijklmpnoqrstuvwxyz"

//   if (numberAllowed){
//     str=str+"1234567890"
//   }
//   if (characterAllowed){
//     str=str+"!@#$%^&*()_+"
//   }

//   for(let i=1;i<=length;i++){
//     pass=pass+str.charAt(Math.floor(Math.random()*str.length +1))
//   }
//   setPassword(pass)
// }, [length, numberAllowed,characterAllowed,setPassword])
//  useEffect(()=>{PasswordGenerator()},[length,numberAllowed,characterAllowed,PasswordGenerator ])
//   return (
//     <>
//     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
//     <h1 className="text-white text-center my-3">Password Generator</h1> 
//     <div className="flex shadow rounded-lg overflow-hidden mb-4">
//     <input 
//       type="text" 
//       value={Password}
//       className='outline-none w-full py-1 px-3'
//       placeholder="Password"
//       readOnly
//       />
//       <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
//     </div>
//     <div className="flex text-sm gap-x-2">
//       <div className="flex items-center gap-x-1">
//         <input type="range" min={6} max={100} value={length} className='cursor-pointer' 
//         onChange={(e)=>setLength(e.target.value)}/>
//         <label>length:{length}</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//         <input type="checkbox" checked={numberAllowed} id ="numberInput" 
//         onChange={(e)=>setNumberAllowed((prev)=>!prev)}/>
//         <label htmlFor="numberInput">Number</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//         <input type="checkbox" checked={characterAllowed} id ="characterInput" 
//         onChange={(e)=>setCharacterAllowed((prev)=>!prev)}/>
//         <label htmlFor="characterInput">Character</label>
//       </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default App


import { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMPNOQRSTUVWXYZabcdefghijklmpnoqrstuvwxyz';

    if (numberAllowed) {
      str += '1234567890';
    }
    if (characterAllowed) {
      str += '!@#$%^&*()_+';
    }

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md mx-auto bg-gray-900 shadow-lg rounded-lg p-6 animate-fade-in">
        <h1 className="text-2xl font-bold text-white text-center mb-6 animate-bounce">Password Generator</h1>
        <div className="flex items-center shadow rounded-lg overflow-hidden mb-4 animate-slide-in">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 bg-gray-700 text-white"
            placeholder="Password"
            readOnly
          />
          <button
            className="outline-none bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 transition duration-300 transform hover:scale-105"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>
        <div className="space-y-4 animate-slide-in">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="text-white">Length: {length}</label>
            <input
              type="range"
              id="length"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="numberAllowed" className="text-white">Include Numbers</label>
            <input
              type="checkbox"
              id="numberAllowed"
              checked={numberAllowed}
              className="cursor-pointer"
              onChange={(e) => setNumberAllowed(e.target.checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="characterAllowed" className="text-white">Include Special Characters</label>
            <input
              type="checkbox"
              id="characterAllowed"
              checked={characterAllowed}
              className="cursor-pointer"
              onChange={(e) => setCharacterAllowed(e.target.checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
