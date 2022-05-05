import React, { useState } from 'react'

function Hook2() {
    const [state,setState]=useState({userName:'',password:''})
  return (
    <div>
        Enter your username:<input name='userName' value={state.userName} onChange={e=>setState({...state,userName:e.target.value})}/>
        Enter your password:<input name='password' value={state.password}  onChange={e=>setState({...state,password:e.target.value})}/>
        <h1>{state.password}</h1>
    </div>
  )
}

export default Hook2