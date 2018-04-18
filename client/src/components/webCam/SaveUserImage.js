import React, {Component} from 'react';
import Webcam from 'react-webcam';
import {connect} from 'react-redux';
import {findUserByFace, clearUserData} from '../../actions/facial.actions';
import SingleUser from '../users/SingleUser'
import styled from 'styled-components'

// material-ui component
import Button from '../styles/Buttons';


// loader styling
// const style = {
//   container: {
//     position: 'absolute'
//   },
//   refresh: {
//     display: 'inline-block',
//     position: 'absolute'
//   },
//   hide: {
//     display: 'none',
//     position: 'absolute'
//   }
// };

class SaveUserImage extends Component {
  componentDidMount() {
    this.props.clearUserData();
  }

  setRef(webcam) {
    this.webcam = webcam;
  }

  capture() {
    const users = this.webcam.getScreenshot();
    this.props.initiateCaptureLoader();
    this.props.findUserByFace(users);
  };

  render() {
    console.log(this.props.users.fetching);

    return (<div style={{
        'textAlign' : 'center'
      }}>
      <h3>DETECT FACE</h3>
      <Webcam height={320} width={320} ref={(event) => this.setRef(event)} screenshotFormat="image/jpeg"/>
      {/* <RefreshIndicator className='styled' size={80} left={70} top={0} loadingColor="#ADD8E6" status="loading" style={(
          this.props.users.fetching === false)
          ? style.hide
          : style.refresh}/> */}
      <br/>
      <Button onClick={() => this.capture()} label="DETECT" primary={true} style={{
          'margin' : 16
        }}/>
      {/* <SingleUser user={this.props.user}/> */}
    </div>);
  }
}

function mapStateToProps(state) {
  return {user: state.user};
}

export default connect(mapStateToProps, {findUserByFace, clearUserData})(SaveUserImage);
