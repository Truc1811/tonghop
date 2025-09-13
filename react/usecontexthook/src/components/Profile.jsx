import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ChangeProfile from './ChangeProfile';
function Profile(){
    const{user}= useContext(AppContext);
    return(
        <div className="profile">
            <h1>Profile {user}</h1>
            <ChangeProfile/>
        </div>
    )

}
export default Profile;