import React, { Component } from 'react'
import axios from 'axios'
export class Posts extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        posts:[],
        errorMsg:""
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.setState({
                posts:response.data
            })
        }).catch(
            error =>{
                console.log(error)
               this.setState({
                   errorMsg:"Cannot retrieve datas"
               })
            }
        )
    }
  render() {
      const {posts,errorMsg}=this.state
    return (
      <div>Posts:
          {
              posts.length?
              posts.map(posts=><div key={posts.id}>{posts.title}</div>):null
          }
          {errorMsg?<div>{errorMsg}</div>:null}
      </div>
    )
  }
}

export default Posts