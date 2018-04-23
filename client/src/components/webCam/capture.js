import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { connect } from 'react-redux';
import { findUserByFace, signUpWithFace, saveUserFace, clearUserData } from '../../actions/facial.actions';
import styled from 'styled-components'

// material-ui component
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';

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

class Capture extends Component {
    componentDidMount() {
        this.props.clearUserData();
    }

    setRef(webcam) {
        this.webcam = webcam;
    }

    capture() {
        const imageSrc = this.webcam.saveUserFace();
        this.props.cameraLoader();
        this.props.recognizeUser(imageSrc);
    };

    render() {
        console.log(this.props.findUserByFace.fetching);

        return (
            <div style={{ 'textAlign': 'center' }}>
                <h3>DETECT FACE</h3>
                <Webcam
                    audio={false}
                    height={320}
                    width={320}
                    ref={(event) => this.setRef(event)}
                    screenshotFormat="image/jpeg"
                />
                <RefreshIndicator
                    className='css-loader'
                    size={80}
                    left={70}
                    top={0}
                    loadingColor="#ADD8E6"
                    status="loading"
                    style={(this.props.findUserByFace.fetching === false) ? style.hide : style.refresh}
                />
                <br />
                <RaisedButton onClick={() => this.capture()} label="DETECT" primary={true} style={{ 'margin': 16 }} />
                <findUserByFace user={this.props.findUserByFace} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        findUserByFace: state.findUserByFace
    };
}

export default connect(mapStateToProps, { findUserByFace, signUpWithFace, saveUserFace, clearUserData })(Capture);
