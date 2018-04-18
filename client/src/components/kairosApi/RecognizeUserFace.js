import React, {Component} from 'react';
// import { Grid, Row, Column, Image, Button, style } from 'semantic-ui-react'
import {Grid, Row, Col, Button} from 'react-flexbox-grid'
import axios from 'axios'
import WebCam from '../webCam/WebCam'
import Webcam_Image from '../webCam/Webcam_Image'
import SaveUserImage from '../webCam/SaveUserImage'
import capture from 'react-webcam'
import styled from 'styled-components'
import {recognizeUser, clearUserData, saveUserFace} from '../../actions/facial.actions.js';
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {ConnectedRouter} from 'react-router-redux'

class Recognize extends Component {
  state = {
    load: false
  };

  setRef = (webcam) => {
    this.webcam = webcam;

    const capture = (webcam) => {
      this.props({load: true});

      const imageSrc = this.webcam.getScreenshot();
      // console.log(imageSrc);
      axios.post(`https://api.kairos.com/recognize/e70fee1f/98112e824f82622206d370dae6ed74b9`, {
        gallery_name: 'newCameriaGallery',
        image: imageSrc
      }, {
        // enter your secret credentials
        headers: {
          app_id: <enter app="squadbox" id="e70fee1f"/>,
          app_key: <enter app="squadbox" key="98112e824f82622206d370dae6ed74b9"/>
        }
      }).then((response) => {
        console.log('response', response);
        this.props.match.params.recognizeUser(response.data);
        this.setState({load: false});
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  render() {

    return(
      <div>recognize</div>
    )
    return (<Grid>
      <Row>
        <Col>
          <div>
            <h3>DETECT FACE</h3>
            <WebCam audio={false} height={320} ref={this.setRef} screenshotformat="image/png" width={320}/>
            <webcam-image className='styled' size={80} left={70} top={0} styled={(this.state.load === false)}/>
            <br/>
            <Button onClick={this.capture} label="DETECT" primary={true} styled={{
                'margin' : 16
              }}/>
            <SaveUserImage detect={this.props.savedImage}/>
          </div>
        </Col>
      </Row>
    </Grid>);
  }
}
function mapStateToProps(state) {
  return {recognizeUser: recognizeUser}
}

export default connect(mapStateToProps, {recognizeUser, clearUserData, saveUserFace})(Recognize);
