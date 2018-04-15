import React, { Component } from 'react';
import axios from 'axios'
import { Button } from 'semantic-ui-react'
import Edit from './Edit'
import styled from 'styled-components'
import NavBar from './NavBar'
import Footer from './Footer'

const PostContainer = styled.div`
    text-align: center;
`

const DeleteWarning = styled.div`
 border: 1px solid red;
 color: red;
 font-size: 40px;
 }
`

const PostStyle = styled.div`
margin: 20px auto;
background: white;
color: #151515;
width: 50%;
border-radius: 6px;
`

const ButtonSpacing = styled.div`
margin: 20px;
`

class Posts extends Component {
  render() {
    return (<PostContainer>
      <PostStyle>
        <div>
          <h1>{this.state.user.title}</h1>
        </div>
        <div>
          <p>{this.state.user.user}</p>
        </div>
      </PostStyle>
      {
        this.state.button
          ? (<div>
            <Button onClick={this.editToggle}>Edit</Button>
          </div>)
          : null
      }
      <ButtonSpacing>
        {
          this.state.editToggle
            ? (<Edit userId={this.props.user.user_id} userId={this.props.match.params.id} getPost={this.getPost} editToggle={this.editToggle}/>)
            : null
        }
      </ButtonSpacing>
      {
        this.state.button
          ? (<Button onClick={this.deleteToggle}>Delete</Button>)
          : null
      }
      {
        this.state.deleteToggle
          ? (<DeleteWarning>
            <p>Are you sure you want to delete?</p>
            <Button onClick={this.deletePost}>Yes</Button>
            <div>
              <Button onClick={this.deleteToggle}>No</Button>
            </div>
          </DeleteWarning>)
          : null
      }
    </PostContainer>);
  }
}
export default Posts
