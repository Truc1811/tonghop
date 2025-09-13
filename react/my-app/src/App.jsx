import React from 'react'
import { useState } from 'react'
import Input from './Input'

import './App.css'

function App() {
  const[age,setAge]=useState(0);
  const increase=()=>{
    setAge(age+1);
  }
  const decrease=()=>{
    setAge(age-1);
  }
  const[show, setShow]=useState(true);
  const[color,setColor]=useState('red');

  return (
    <>
    <div>
      <h1>Age: {age}</h1>
      <button onClick={increase}>Increase</button> 
      <button onClick={decrease}>Decrease</button>
      <Input></Input>
      <br></br>   
      <button onClick={()=>setShow(!show)}>HIDE/SHOW</button>
      <button onClick={()=>setColor(color==='red'?'blue':'red')}>Change Color</button>
      {show && <h1 style={{ color: color }}>My name is truc</h1>}
    </div>
    </>
  )
}

export default App
