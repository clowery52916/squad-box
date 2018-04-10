import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class LandingPage extends Component {


  render() {
    return (
      <div>
        <h2>Squad-Box</h2>
        <Link to='/users'>Sign Up</Link>
      <br/>
        <Link to='/users/:id'>Login</Link>

      </div>
    );
  }

}
