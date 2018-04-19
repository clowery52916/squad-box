mport React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {getOnePostRoute} from '../../actions/thunk.posts.js'
import Navbar from '../navbar/Navbar.js'

class PostShow extends Component {

  state = {
      showEdit: false,
      redirectToUsers: false
  }

  componentDidMount() {
      this.getPost()
  }

  getPost = async() => {
      const res = await axios.get(`/api/users/${this.props.match.params.userId}`)
      this.setState({
          body: res.data.user.body,

      })

  }

  handleSubmit = async(event) => {
      event.preventDefault()
      console.log(this.state.body)
      const res = axios.patch(`/api/users/${this.props.match.params.userId}`,{
          body: this.state.body,
          aboutMe: this.state.aboutMe
      })
  }

  handleChange = (event) => {
      const body = event.target.body
      const newState = { ...this.state }
      newState[body] = event.target.value
      this.setState(newState)
  }

  toggle = () => {
      this.setState({ showEdit: !this.state.showEdit })
  }

  handleDelete = async() => {
      const res = axios.delete(`/api/users/${this.props.match.params.userId}`)
      console.log(res)
      this.setState({ redirectToUsers: !this.state.redirectToUsers })
      // this.props.getPosts()

  }

  render() {
      if(this.state.redirectToUsers){
          return <Redirect to='/users/userId' render={UserIndex}/>
      }
      return (
          <div className='search list' >
              <h1>{this.state.body}</h1>
              <button onClick={this.toggle}>Edit Your Post</button>
              <button onClick={this.handleDelete}>Delete User Account</button>
              {this.state.showEdit
                  ?
                  <div>
                      <form onSubmit={this.handleSubmit}>

                          <input body='body'
                              type='text'
                              onChange={this.handleChange}
                              value={this.state.body}
                              placeholder={this.state.body}
                          />

                          <button type='submit'>Update User</button>



                      </form>
                  </div>
                  : null}
          </div>
      );
  }
}


const mapStateToProps = (state) => {
    return {posts: state.posts[0]}
}

export default connect(mapStateToProps, {getOnePostRoute})(PostShow);
