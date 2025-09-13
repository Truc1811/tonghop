import ChangeProfile from "./ChangeProfile"
import { useContext } from "react"
import {AppContext} from "../App"

const Profile=()=>{
     const{userName}=useContext(AppContext);
    return(
        <>
        <h1>HERE IS PROFILE of {userName}  <ChangeProfile /></h1>
        </>
    )
}
export default Profile