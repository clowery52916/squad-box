// import React, {Component} from 'react';
// import RaisedButton from 'material-ui/Button';
// import Grid from 'material-ui'
// import Row from 'material-ui';
// import Col from 'material-ui';
// import axios from 'axios'
// import styled from 'styled-components'
//
// // curl -d '{"image": "https://i.imgur.com/I6wdfHL.jpg"}' -H "app_id: e70fee1f" -H "app_key: 98112e824f82622206d370dae6ed74b9" -H "Content-Type: application/json" http://api.kairos.com/detect
//
//
//
// export default class WebCamLogin extends Component {
//   state = {
//     userId: '',
//       name: '',
//       email: '',
//       password: '',
//       photo: '',
//       load: false
//   }
//   setRef = (webcam) => {
//     this.webcam = webcam;
//   }
//   capture = () => {
//     setState({load: true})
//     const photo = this.webcam.getScreenshot();
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
//       setState({load: false});
//     });
//
//   setState({users: users})
// }
//
//          render() {
//
//           return (
//             <Grid fluid="fluid">
//             <Row>
//               <Col xs={12} md={4} mdOffset={4}>
//                 <div style={{
//                     'textAlign' : 'center'
//                   }}>
//                   <h3>REGISTER FACE</h3>
//                   <div audio={false} height={320} ref={this.setRef} screenshotFormat="image/png" width={320}/>
//                   <br/>
//                   <div style={{
//                       'margin' : '0 auto!important'
//                     }}>
//                     <div hintText="provide identification name" floatingLabelText="Username" onChange={(event) => this.handleUsername(event)}/>
//                   </div>
//                   <br/>
//                   <div className='css-loader' size={80} left={70} top={0} loadingColor="#ADD8E6" status="loading" style={(
//                       this.state.load === false)
//                       ? style.hide
//                       : style.refresh}/>
//                   <br/>
//                   <RaisedButton className='register-button' onClick={this.capture} label="REGISTER" primary={true} style={{
//                       'margin' : 16
//                     }}/>
//                   <RaisedButton className='register-button' onClick={this.resetGallery} label="RESET GALLERY" primary={true} style={{
//                       'margin' : 16
//                     }}/>
//                   <div detect={this.props.regData}/>
//                 </div>
//               </Col>
//             </Row>
//           </Grid>
//         )}}
