import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editUser, saveEditUser} from '../actions/user.actions'
class EditUser extends Component {
  state = {
    user: ''
  }

  handleChange = (event) => {
    this.setState({user: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.editUser(this.props.id, this.state.user)
    this.setState({user: ''})
  }
  render() {
    return (<form onSubmit={this.handleSubmit}>
      <label htmlFor="name">Edit Name
      </label>
      <input type="text" onChange={this.handleChange} value={this.state.user}/>
      <button type="submit">Submit</button>
      <label htmlFor="age">Edit Age
      </label>
      <br/>
      <input type="text" onChange={this.handleChange} value={this.state.user}/>
      <button type="submit">Submit</button>
      <label htmlFor="email">Edit Email
      </label>
      <br/>
      <input type="text" onChange={this.handleChange} value={this.state.user}/>
      <button type="submit">Submit</button>
      <label htmlFor="password">Edit Password
      </label>
      <br/>
      <input type="text" onChange={this.handleChange} value={this.state.user}/>
      <button type="submit">Submit</button>
      <input onChange={this.handleChange} value={this.state.user}/>
      <button onClick={this.handleClick}>Add New Photo</button>
    </form>)
  }
}

export default connect(null, {editUser, saveEditUser})(EditUser)
