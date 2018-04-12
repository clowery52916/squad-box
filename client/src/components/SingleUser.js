import React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {getSingleUser} from '../actions/user.actions.js'
import axios from 'axios'
import {push} from 'react-router-redux'


class SingleUser extends Component {

  componentWillMount() {
    const userId = this.props.match.params.id;
    this.props.getSingleUser(userId)

  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      userId: {
        id: this.props.match.params.userId,
        name: nextProps.userId.name,
        email: nextProps.userId.email,
        password: nextProps.userId.pssword,
        photo: nextProps.userId.photo,


      }
    })
  }

  state = {
    userId: {
      name: "",
      email: "",
      password: "",
      photo: "",


    }
  }

  render() {
    console.log("our user", this.props.match.params.userId)
    return (<div>

      <h3>User Profile</h3>
      <br/>
      <img src={this.state.userId.photo} alt={this.state.userId.name}/>
      <h1>{this.state.userId.email}</h1>
      <h1>{this.state.userId.passsword}</h1>

      }
    </div>);
  }
}

const mapStateToProps = (state) => {
  return {userId: state.users}
}

export default connect(mapStateToProps, {getSingleUser})(SingleUser);
