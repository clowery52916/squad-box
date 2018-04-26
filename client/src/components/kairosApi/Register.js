import React, { Component } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components'
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { registerUser, clearDisplayData } from '../../actions/index';
import UserRegister from './user-register';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


// loader styling
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: rgb(74, 74, 74);
  background: rgb(172, 172, 172);
  border: none;
  border-radius: 3px;
`;
const Font = styled.div`
    font-family: 'Molengo', sans-serif;
`
const Button = styled.button`
  position: relative;
  background-color: rgb(74, 74, 74);
  border-radius: 20%;
  font-family: 'Molengo', sans-serif;
  font-size: 10px;
  color: #FFFFFF;
  padding: 10px;
  width: 75px;
  height: 30px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

`
const style = {
    container: {
        position: 'absolute',
    },
    refresh: {
        display: 'inline-block',
        position: 'absolute',
    },
    hide: {
        display: 'none',
        position: 'absolute',
    },
};

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            age:'',
            load: false
        };
    }

    componentDidMount() {
        this.props.clearDisplayData();
    }

    setRef = (webcam) => {
        this.webcam = webcam;
    }

    capture = () => {

        if (this.state.username === '' || this.state.username === ' ') {
            alert('name cannot be empty');
            return;
        }

        this.setState({
            load: true
        });

        const imageSrc = this.webcam.getScreenshot();

        axios.post(`https://api.kairos.com/enroll`, {
            gallery_name: 'allUsers',
            image: imageSrc,
            subject_id: this.state.username,
            age: this.state.age
        }, {
                headers: {
                    app_id: 'e70fee1f',
                    app_key: '98112e824f82622206d370dae6ed74b9'
                }
            }).then((response) => {
                console.log(response);
                this.props.registerUser(response.data);
                this.setState({
                    load: false
                });
            });
    }

    resetGallery = () => {

        this.setState({
            load: true
        });

        axios.post(`https://api.kairos.com/gallery/remove`, {
            gallery_name: "deleteUsers"
        }, {
                headers: {
                    app_id: 'e70fee1f',
                    app_key: '98112e824f82622206d370dae6ed74b9'
                }
            }).then((response) => {
                alert('Gallery has been reset. Feel free to register now');
                this.setState({
                    load: false
                });
            });
    }

    handleChange(e) {
        this.setState({
            username: e.target.value,
            age: e.target.value
        });
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} md={4} mdOffset={4}>
                      <Font>
                        <div style={{ 'textAlign': 'center' }}>
                            <h3>Sign Up your Face!</h3>
                            <Webcam
                                audio={false}
                                height={320}
                                ref={this.setRef}
                                screenshotFormat="image/png"
                                width={520}
                            />
                            <br />
                            <div style={{ 'margin': '0 auto!important' }}>
                                <Input
                                    hintText="provide identification name"
                                    floatingLabelText="name"
                                    placeholder='Name'
                                    onChange={(event) => this.handleChange(event)}
                                />
                            </div>
                            <br />
                            {/* <RefreshIndicator
                                className='css-loader'
                                size={80}
                                left={70}
                                top={0}
                                loadingColor="#ADD8E6"
                                status="loading"
                                style={(this.state.load === false) ? style.hide : style.refresh}
                            /> */}
                            <br />

                            <Button className='register-button' onClick={this.capture} label="REGISTER" primary={true} style={{ 'margin': 16 }} >Register</Button>
                            <UserRegister detect={this.props.regData} />

                        </div>
                        </Font>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        regData: state.regData
    }
}

export default connect(mapStateToProps, { registerUser, clearDisplayData })(Register);
