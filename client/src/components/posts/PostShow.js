mport React, {Component} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {getOnePostRoute} from '../../actions/thunk.posts.js'
import Navbar from '../navbar/Navbar.js'

class PostShow extends Component {

    componentWillMount() {
        const postId = this.props.match.params.postId;
        const userId = this.props.match.params.userId;
        this
            .props
            .getOnePostRoute(userId, postId)

    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            posts: {
                body: this.props.match.params.postId,
          
            }
        })
    }

    state = {
        posts: {
            body:''

        }
    }

    render() {
        console.log("our post", this.props.posts)
        return (

            <Container>
                <div>
                    <Navbar/>
                </div>
                <h1>Post</h1>
                <br/>
                <SinglePost>
                    <h3>{this.state.posts.title}</h3>
                    <br/>
                    <p>{this.state.posts.content}</p>
                </SinglePost>

            </Container>

        );
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts[0]}
}

export default connect(mapStateToProps, {getOnePostRoute})(PostShow);
