import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Webcam from 'react-webcam';
import Webcam_Image from './Webcam_Image'
import WebCamLogin from './WebCamLogin'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

export default class LandingPage extends Component {

  render() {
    return (<div>
      <h2>Squad-Box</h2>
      <LoginForm/>
      <br/>
      <br/>
      <SignUpForm/>
      <br/>
    </div>);
  }

}
