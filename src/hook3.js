import React, { useState } from 'react'

function Hook3() {
    const[infos,setInfo]=useState([])
    const appendInfo = ()=>{
        setInfo(
            [...infos,{
                id:infos.length,
                value:Math.ceil(Math.random()*10)
            }]
        )
    }
  return (
    <div>
        <button onClick={appendInfo}>Click me</button>
        {infos.map(info=>(
            <h2 id={info.id}>{info.value}</h2>))}
        
    </div>
  )
}

export default Hook3