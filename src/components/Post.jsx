import React, { Component } from 'react'
// import axios from 'axios'
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions'

class Post extends Component {
  // state ={
  //   post: null
  // }
  // componentDidMount(){
  //   console.log(`=========>> PROPS IN POST:`,this.props)

  //   let specificId = this.props.match.params.post_id

  //   axios.get('https://jsonplaceholder.typicode.com/posts/' + specificId)
  //   .then(res => {
  //     this.setState({
  //       post: res.data
  //     })
  //     console.log(`========>> RESPONSE IN POST FROM GET`,res)
  //   })
  // }
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/')
  }
  render() {
    console.log(`===========>> PROPS IN POST.js`,this.props)
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    )
    return (
      <div className='container'>
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  let id = ownProps.match.params.post_id;

  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    deletePost: (id) => {
      dispatch(deletePost(id));                     // Now using the imported ACTION CREATOR !!!
    }
    // deletePost: (givenId) => {
    //   dispatch({
    //     type: 'DELETE_POST',
    //     id: givenId
    //   })
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);