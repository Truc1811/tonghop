
import axios from "axios";
import { useState } from "react";
const Name=()=>{
    const [name, setName]= useState("");
    const[age,setAge]= useState(null);
    const handle=()=>{
        axios.get(`https://api.agify.io/?name=${name}`).then(res=>setAge(res.data.age));

    }
    
    return (
        <>
        <input onChange={(event)=>setName(event.target.value)}/>
        <button onClick={handle}>Predict age</button>
        {age !==null && <h1>{age}</h1>}
        </>
    )

}
export default Name;