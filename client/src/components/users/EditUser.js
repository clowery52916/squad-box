import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import styled from 'styled-components'
import {saveEditUser, singleUserPath} from '../../actions/user.actions'
import NavBar from '../styles/NavBar'
import Footer from '../styles/Footer'

const Container = styled.div `
  text-align: center;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #8f8d8d;
  color: rgba(#9a97b8, 0.61);
`;

class EditUser extends Component {

  componentWillMount() {
    this
      .props
      .singleUserPath(this.props.match.params.userId)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      updateUserInfo: {
        id: this.props.match.params.userId,
        name: nextProps.updateUserInfo.name,
        age: nextProps.updateUserInfo.age,
        email: nextProps.updateUserInfo.email,
        photo: nextProps.updateUserInfo.photo,
        password: nextProps.updateUserInfo.password
      }
    })
  }
  state = {
    updateUserInfo: {
      id: "",
      name: "",
      age: "",
      email: "",
      photo: "",
      password: ""
    }
  }

  handleChange = (event) => {
    const updatedUser = {
      ...this.state.updateUserInfo
    }
    const inputField = event.target.name
    const inputValue = event.target.value
    updatedUser[inputField] = inputValue
    this.setState({updateUserInfo: updatedUser})
  }

  handleEditUser = () => {
    this.props.saveEditUser(this.state.updateUserInfo).then((response) => {
        (this.props.push(`/users`))
      })
  }

  render() {
    return (
      <Container>
        <div>
          <NavBar/>
        </div>
        <div>
          <h2>
            {this.state.updateUserInfo.name}</h2>
        </div>
        <div>
          <div>
            Name:</div>
          <input
            className="editUser"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.updateUserInfo.name}/>
        </div>
        <div>
          <div>
            Age:</div>
          <input
            className="editUser"
            type="text"
            name="age"
            onChange={this.handleChange}
            value={this.state.updateUserInfo.age}/>
        </div>
        <div>
          <div>
            Email:</div>
          <input
            className="editUser"
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.updateUserInfo.email}/>
        </div>
        <div>
          <div>
            Photo: </div>
          <input
            className="editUser"
            type="text"
            name="photo"
            onChange={this.handleChange}
            value={this.state.updateUserInfo.photo}/>
        </div>
        <div>
          <div>
            Password:</div>
          <input
            className="editUser"
            type="text"
            name="password"
            onChange={this.handleChange}
            value={this.state.updateUserInfo.password}/>
        </div>
        <br/>
        <button onClick={this.handleEditUser}>
          Edit
        </button>
            <Footer/>
      </Container>

    )
  }
}

const mapStateToProps = (state) => {
  return {updateUserInfo: state.users[0]}
}

export default connect(mapStateToProps, {singleUserPath, saveEditUser, push})(EditUser)
