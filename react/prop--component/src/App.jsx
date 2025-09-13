
import './App.css'

function App() {
  const name=<h1>Truc</h1>
  const tuoi=<h3>21</h3>
  const user=(
    <div>
      <h1>Addy</h1>
      <h3>35</h3>
    </div>
  );
  return (
    <>
     <div>{name}</div>
     <div>{tuoi}</div>
     <div>{user}</div>
     <User name="Mini" age="no know"></User>
     <User name="Ana" age="18"></User>
    </>
  )
}


const User=(props)=>{
  return(
    <div>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
    </div>
  );
}

export default App
