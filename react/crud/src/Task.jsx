const Task=(props)=>{
    return (
        <>
     
             <span>{props.taskName}</span>
             <button onClick={()=>props.deleteTask(props.id)}>x</button>
        
        </>
    );
}
export default Task;