import axios from "axios";
import { useState, useEffect } from "react";
const Catfact=()=>{
    const[catfact, Setcatfact]=useState("");
    
    const handle=()=>{
         axios.get("https://catfact.ninja/fact").then(res=>{
        Setcatfact(res.data.fact)
    });
    }
      useEffect(() => {
    handle();
  }, []);

    
   


    return (
        <>
         
         <div>
            <button onClick={handle}>Catfact</button>
            <h1>{catfact}</h1>
         </div>
        </>
    )
}
export default Catfact;