import React, {Component} from 'react';
import Webcam from 'react-webcam';
// import '../styles/register.css';

import axios from 'axios';
import {Grid, Row, Col} from 'react-flexbox-grid';

import {connect} from 'react-redux';
import {signUpWithFace, clearUserData, saveUserFace} from '../actions/facial.actions.js';

import RecognizeUserFace from './RecognizeUserFace';

// material-ui components
import Text from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';

// loader styling
const style = {
  container: {
    position: 'absolute'
  },
  refresh: {
    display: 'inline-block',
    position: 'absolute'
  },
  hide: {
    display: 'none',
    position: 'absolute'
  }
};

class Register extends Component {
  state = {
    username: '',
    load: false
  }

  componentDidMount() {
    this.props.clearUserData();
  }

  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {

    if (this.state.username === '' || this.state.username === ' ') {
      alert('Username cannot be empty');
      return;
    }

    this.setState({load: true});

    const imageSrc = this.webcam.getScreenshot();

    axios.post(`https://api.kairos.com/enroll`, {
      gallery_name: 'newCameriaGallery',
      image: imageSrc,
      subject_id: this.state.username
    }, {
      headers: {
        app_id: <enter app="app" id="id" here="here"/>,
        app_key: <enter app="app" key="key" here="here"/>
      }
    }).then((response) => {
      console.log(response);
      this.props.signUpWithFace(response.data);
      this.setState({load: false});
    });
  }

  resetGallery = () => {

    this.setState({load: true});

    axios.post(`https://api.kairos.com/gallery/remove`, {
      gallery_name: "newCameriaGallery"
    }, {
      headers: {
        app_id: <enter app="app" id="id" here="here"/>,
        app_key: <enter app="app" key="key" here="here"/>
      }
    }).then((response) => {
      alert('Gallery has been reset. Feel free to register now');
      this.setState({load: false});
    });
  }

  handleUsername(e) {
    this.setState({username: e.target.value});
  }

  render() {
    return (<Grid fluid="fluid">
      <Row>
        <Col xs={12} md={4} mdoffset={4}>
          <div style={{
              'textAlign' : 'center'
            }}>
            <h3>REGISTER FACE</h3>
            <div class="ui action input">
              <input type="text" placeholder="Search..."/>

              </div>
            <Webcam audio={false} height={320} ref={this.setRef} screenshotFormat="image/png" width={320}/>
            <br/>
            <div style={{
                'margin' : '0 auto!important'
              }}>
              {/* <SaveUserImage ref={this.setRef} /> */}
              <input placehoder="provide identification name" floatingtextlabel="Username" onChange={(event) => this.handleUsername(event)}/>
              <button onClick={this.setRef} className="ui button">Register</button>
                </div>


              <br/>

            </div>
          </Col>
        </Row>
      </Grid>); } } function mapStateToProps(state) {return {signUpWithFace: state.signUpWithFace}}

      export default connect(mapStateToProps, {
        signUpWithFace,
        clearUserData,
        saveUserFace
      })(Register);
