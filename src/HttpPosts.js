import axios from 'axios'
import React, { Component } from 'react'

class HttpPosts extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         email:'',
         password:''
      }

      this.onChangeHandler=this.onChangeHandler.bind(this)
    }
    onChangeHandler=e=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    submitHandler=e=>{
       e.preventDefault()
       console.log(this.state)
       axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
       .then(
         response=>{
           console.log(response.data)
         }
       )
       .catch(
         error=>{
           console.log(error)
         }
       )
     }
  render() {
    const {username,email,password} =this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" onChange={this.onChangeHandler} name="username" value={username}/><br/>
          <input type="text" onChange={this.onChangeHandler} name="email" value={email}/><br/>
          <input type="text" onChange={this.onChangeHandler} name="password" value={password}/><br/>
          <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}

export default HttpPosts