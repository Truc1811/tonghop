import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useState } from 'react';

function ChangeProfile(){
    const{setUser} = useContext(AppContext);
    const [newUser, setNewUser] = useState("");
    return(
        <div className="change-profile">
            <h1>Change Profile</h1>
            <input type='text' 
                   placeholder='Enter new username'
                     value={newUser}
                     onChange={(e)=> setNewUser(e.target.value)} />
           <button onClick={()=>{setUser(newUser)}}>Click here</button>
        </div>
    )
}
export default ChangeProfile;