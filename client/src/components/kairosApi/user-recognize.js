import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserRecognize extends Component {
    render() {
        if (this.props.detect.message === 'error') {
            return (<p><b>Face not in the frame or gallery is empty.</b> Please try again by occupying the frame and if the error still persists, try registering.</p>);
        } else if (this.props.detect.message === 'failure') {
            return (<p><b>Face not in gallery.</b> Please register with us <Link to={'/register'}>here</Link></p>);
        } else if (this.props.detect.message === 'success') {
            return (
                <div>
                    <p><b>Welcome Back </b>{this.props.detect.name}</p>
                    <p><b>face Id: </b>{this.props.detect.faceID}</p>
                    <p><b>age: </b>{this.props.detect.age}</p>
                </div>);
        } else {
            return <p><b>RECOGNITION STATUS</b> WILL BE DISPLAYED HERE</p>
        }
    }
}

export default UserRecognize;
