import { useContext } from "react"
import {AppContext} from "../App"

const Home=()=>{
    const{userName}=useContext(AppContext);
    return(
        <>
        <h1>Home {userName}</h1>
        </>
    )
}
export default Home