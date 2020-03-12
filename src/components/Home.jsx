import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import phoenixLogo from '../images/phoenixLogo.png'

export default class Home extends Component {
  state ={
    posts: [ ]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts') //This is asynchronous, 0.5 - 3 seconds // It's a Promise
    .then(res => {
      console.log(`=========>> logging response from get in home:`,res)
      this.setState({
        posts: res.data.slice(0, 10)
      })
    })
  }
  render() {
    const {posts} = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card teal lighten-5" key={post.id}>
            <img src={phoenixLogo} alt="A Phoenix" />
            <div className="card-content ">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )
    return (
      <div className='container home '>
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}