import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserRegister extends Component {
    render() {
        if (this.props.detect.message === 'error') {
            return (<p><b>Your face isn't adjusted quiet right, please adjust so your face is centered.</b> Please try again</p>);
        } else if (this.props.detect.message === 'failure') {
            return (<p><b>Registration failed</b><br />Please try again.</p>);
        } else if (this.props.detect.message === 'success') {
            return (
                <div>
                    <p>
                        User successfully <b>registered</b>
                        <br />
                        Go ahead and recognize yourself <Link to={'/recognize'}>here.</Link>
                    </p>
                </div>);
        } else {
            return <p>Status will apprear here shortly.</p>
        }
    }
}

export default UserRegister;
