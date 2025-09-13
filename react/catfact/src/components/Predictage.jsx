import React, { useState } from 'react';
import axios from 'axios';

function Predictage() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);
    
    const handlePredictAge = () => {
        axios.get(`https://api.agify.io?name=${name}`).then((res) => {
           setAge(res.data);
        });
    }
  return (
    <>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handlePredictAge}>Predict age</button>
      <h1>Name: {age?.name}</h1>
      <h1>Count: {age?.count}</h1>
      <h1>Age: {age?.age}</h1>
    </>
  );
}
export default Predictage;
