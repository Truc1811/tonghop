import axios from "axios";

import { useState} from "react";


const Excuse=()=>{
    const[generateExcuse, setgenerateExcuse]=useState("");
    const fectapi=(excuse)=>{
        axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
        .then(res=>{
            setgenerateExcuse(res.data[0].excuse);

        })
    }
    return(
        <>
        <h1>{generateExcuse}</h1>
        <button onClick={()=>fectapi("family")}>Family</button>
         <button onClick={()=>fectapi("office")}>Office</button>
         <button onClick={()=>fectapi("party")}>Party</button>
        </>

    )
}
export default Excuse;