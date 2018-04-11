import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Webcam from 'react-webcam';
import Webcam_Image from './Webcam_Image'
import WebCamLogin from './WebCamLogin'

export default class LandingPage extends Component {


  render() {
    return (
      <div>
        <h2>Squad-Box</h2>
        <Link to='/user'>Sign Up</Link>
      <br/>
      <div>
        <Link to='/users'>Login</Link>
      </div>
      </div>
    );
  }

}
