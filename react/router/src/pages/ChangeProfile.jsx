import { useState } from "react"
import { useContext } from "react"
import {AppContext} from "../App"

const ChangeProfile=()=>{
      const{setUserName}=useContext(AppContext);
    const[newUser, setNewUser]=useState("")
    return(
        <>
        <div>
            <input onChange={(e)=>{setNewUser(e.target.value)}}/>
            <button onClick={()=>{setUserName(newUser)}}>Change username</button>
        </div>
        </>
    )
}
export default ChangeProfile