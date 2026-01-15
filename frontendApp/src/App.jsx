import { useState } from "react"
function App() 
{
  const[task,setTask]=useState([])
  const[input,Setinput]=useState("")
  
  const takeInput=(event)=>
  {
    Setinput(event.target.value)
  }
  const addMyTask=()=>
  {
    setTask([...task,{title:input,isDone:false}])
  }
  const changeState=(index)=>
  {
    const manipulatedArr=task.map(
      (item,i)=>
      {
        if(i===index)
        {
            return{...item,isDone:true}
        }
          return item
      }
    )
    setTask(manipulatedArr)
  }
  const delTask=(index)=>
  {
    const newArr=task.filter((_,i)=>
    {
      return i!==index;
    })
    setTask(newArr)
  }
  return(
    <>
    <h1>Todo List</h1>
    <input onChange={takeInput} type="text" placeholder="Enter your task" />
    <button onClick={addMyTask}>Add Task</button>
    <ul>
    {task.map((item,index,)=>
    {
      return <li style={{textDecoration:item.isDone?'line-through':''}} key={index}>{item.title} 
       <button onClick={()=>changeState(index)}>Done</button> <button onClick={()=>delTask(index)}>Delete</button></li>
    })}
    </ul>
    </>
  )
}
export default App

