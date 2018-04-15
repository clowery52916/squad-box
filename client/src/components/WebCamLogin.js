import React, {Component} from 'react';
import { Grid, Button } from 'semantic-ui-react'
import axios from 'axios'
import styled from 'styled-components'
import Webcam from 'react-webcam'
import Webcam_Image from './Webcam_Image'

// curl -d '{"image": "https://i.imgur.com/I6wdfHL.jpg"}' -H "app_id: e70fee1f" -H "app_key: 98112e824f82622206d370dae6ed74b9" -H "Content-Type: application/json" http://api.kairos.com/detect



export default class WebCamLogin extends Component {
  state = {
    userId: '',
      name: '',
      email: '',
      password: '',
      photo: '',
      load: false
  }



  setRef = (webcam) => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.props;
  };

  setRef = (webcam) => {
    this.webcam = webcam;
  }
  capture = () => {
    this.setState({load: true})
    const photo = this.props
  }
//
//     axios.post(`https://api.kairos.com/enroll`, {
//       image: photo,
//       subject_id: this.state.name
//     }, {
//       // you have to add your secret credentials here
//       // headers: {
//       //   app_id: e70fee1f,
//       //   app_key: 98112e824f82622206d370dae6ed74b9,
//       // }
//     }).then((response) => {
//       // redux method for refining the JSON response is invoked
//       this.props.getSingleUser(response.data);
//       this.setState({load: false});
//     });
//   //
//   // this.setState({userId: userId})
// }

         render() {

          return (
            <Grid fluid="fluid">
            <Grid.Row>
              <Grid.Column xs={12} md={4} mdoffset={4}>
                <div style={{
                    'textAlign' : 'center'
                  }}>
                  <h3>REGISTER FACE</h3>
                  <div>
                    <div
                      audio={false}
                      height={350}
                      ref={this.setRef}
                      screenshotFormat="image/jpeg"
                      width={350}>
                      </div>
                    <button onClick={this.capture}>Capture photo</button>
                  </div>
                  <Button className='register-button' onClick={this.capture} label="REGISTER" primary={true} style={{
                      'margin' : 30
                    }}/>
                  <Button className='register-button' onClick={this.resetGallery} label="RESET GALLERY" primary={true} style={{
                      'margin' : 16
                    }}/>
                  <div detect={this.props.regData}/>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}}
