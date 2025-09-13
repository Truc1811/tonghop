import React, { useState } from 'react';

const Input=()=>{
    const [text,setText]=useState('');
    const changekey=(e)=>{
        setText(e.target.value);
    }
    return (
        <>
          <input onChange={changekey} type="text" placeholder="Enter text here"></input>
          <h1>{text}</h1>
        </>
       
    )
}
export default Input;