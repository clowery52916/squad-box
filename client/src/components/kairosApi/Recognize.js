import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { recognizeUser, clearDisplayData } from '../../actions/index';
import UserRecognize from './user-recognize';

// loader styling
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

class Recognize extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        this.setState({
            load: true
        });

        const imageSrc = this.webcam.getScreenshot();

        axios.post(`https://api.kairos.com/recognize`, {
            gallery_name: 'newCameriaGallery',
            image: imageSrc
        }, {
                headers: {
                    app_id: 'e70fee1f',
                    app_key: '98112e824f82622206d370dae6ed74b9'
                }
            }).then((response) => {
                console.log('response', response);
                this.props.recognizeUser(response.data);
                this.setState({
                    load: false
                });
            }).catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} md={4} mdOffset={4}>
                        <div style={{ 'textAlign': 'center' }}>
                            <h3>Let's make sure it's really you!</h3>
                            <Webcam
                                audio={false}
                                height={320}
                                ref={this.setRef}
                                screenshotFormat="image/png"
                                width={520}
                            />
                            <br />
                            <br/>
                            <button onClick={this.capture} label="DETECT" primary={true}>Detect Face</button>
                            <UserRecognize detect={this.props.detData} />
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        detData: state.detData
    }
}

export default connect(mapStateToProps, { recognizeUser, clearDisplayData })(Recognize);
