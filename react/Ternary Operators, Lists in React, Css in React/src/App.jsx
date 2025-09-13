
import './App.css'
import Planet from './Planet';
import User from './User';

function App() {
  const age=15;
  const green = false;
  const users=[
    {name :" John", age: 25},
    {name : "Jane", age: 30},
    {name : "Bob", age: 35},
  ]

  const planet=[
    {name: "Earth", type: true},
    {name: "Mars", type: false},
    {name: "Venus", type: true},
    {name: "Jupiter", type: false},
    {name: "Saturn", type: true},
    {name: "Uranus", type: false},
    {name: "Neptune", type: true},
    {name: "Pluto", type: false},
  ]
  return (
    <>
     <h1>{age >=18 ? "over age 18" : "under age 18"}</h1>
     <div style={{ color: green ? "green" :"red" }}>This is green</div>

     {green && <button>This is button</button>}
     <div className="d-flex justify-center items-center">
        {users.map((user, key)=>{
          return (
           <User key={key} name={user.name} age={user.age} />
          );
        })}
     </div>

     <div>
      {planet.map((item , key)=>(
        <div>
        {item.type ===true && (
          <Planet key={key} name={item.name}/>
        )}  
        </div>
     ))}
     </div>
    </>
  )
}

export default App


