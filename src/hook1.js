import React,{useState} from 'react'
function Hook1(){
    const initialCount=0
const [count,setCount]=useState(initialCount)
return(
    <div>
       Count:<h1>{count}</h1><br/>
       <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment1</button>
       <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement1</button>
    </div>
)


}

export default Hook1