import React, { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';

function Catfact(){
    // This component is a placeholder for a cat fact.
    // fetch("https://catfact.ninja/fact").then((res)=>(res.json())).then((data)=>{
    //   console.log(data);
    // });
    const [catFact, setCatFact] = useState("");
    // Fetch a cat fact from the API when the component mounts
    const fetchCatFact =() =>{
      Axios.get("https://catfact.ninja/fact").then((res) => {
        setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <>
      <button onClick={fetchCatFact}>Cat fact</button>
      <p>{catFact}</p>
    </>
  );
}

export default Catfact