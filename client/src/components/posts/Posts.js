import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import { Redirect, Link } from 'react-router-dom'
import {editToggle, editPost, saveNewPost, addPost, saveEditPost, deletePost } from '../../actions/post.actions'
import EditPost from './EditPost'

const FormContainer = styled.div`
  width: 60vw;
  margin: 20px auto;
`;

const ButtonSpacing = styled.div`
margin: 10px;
`

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.addPost()
    }

    addPost = async() => {
        const res = await axios.get('/api/users/userId/posts')
        this.setState({
            posts: res.data.posts
        })
    }

    render() {
        return (
            <div className='list'>
                <h3>Posts</h3>
                {
                    this.state.posts.map((post, i) => {
                        return (
                            <div key={i}>
                                <h2 className='list'><Link  className='link list' to={`users/userId/posts/${post.id}`}>{post.name}</Link></h2>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
  return {addPost: state.addPost}
}

export default connect(mapStateToProps, {push, editToggle, editPost, addPost, saveNewPost, saveEditPost, deletePost})(Posts);
