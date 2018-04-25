import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class UserConfirmData extends Component {
    render() {
        console.log(this.props);

        if (!this.props.user.data) {
            return (
                <p>Sign up with your face! Your age lets you in! No parents aloud!</p>
            )
        }
<Redirect to='/users>'/>
        return (
            <div className='userData'>
                <p>You're in! Face has been saved!</p>
            </div>
        );
    }
}

export default UserConfirmData;
