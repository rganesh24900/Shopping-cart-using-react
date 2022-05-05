import React, { useEffect, useState } from 'react'

function hookCounter1() {

  const [count,setCount]=useState(0);
  useEffect(()=>{
console.log("Heyyy");
document.title="you clicked"+{count}+"times"
  })
  return (
    <div>
       
    </div>
  )
}

export default HookCounter1