import uuid from 'uuid'
import axios from 'axios'

export function incrementPost (index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

export function allPosts(returnUserPost) {
  return {type: 'GET_POSTS', returnUserPost}
}

export function postPath(userId) {
  return function(dispatch) {
    return axios.get(`/api/users/${userId}/posts`).then((response) => {
      dispatch(allPosts(response.data))
    })
  }
}

///function to get post info
export function getSinglePost(returnUserPost) {
  return {type: 'GET_SINGLE_POST_DATA', returnUserPost}
}

export function singlePostPath(userId, postId) {
  return function(dispatch) {
    return axios.get(`/api/users/${userId}/posts/${postId}`).then((response) => {
      console.log(getSinglePost)
      dispatch(getSinglePost(response.data))
    })
  }
}
//get Post Info
export function addPost(addPostInfo) {
  return {type: 'CREATE_NEW_POST', addPostInfo}
}

export function saveNewPost(userId, addPostInfo) {
  return function(dispatch) {
    return axios.post(`/api/users/${userId}/posts/`, addPostInfo).then((response) => {
      dispatch(addPost(response.data))
    })
  }
}
//get function to get info from the post
export function editPost(editPostInfo) {
  console.log(editPostInfo)
  return {type: 'EDIT_POST_INFO', editPostInfo}
}

export function saveEditPost(userId, saveEditPostInfo) {
  console.log(saveEditPostInfo)
  return function(dispatch) {
    return axios.put(`/api/users//${userId}/posts/${saveEditPostInfo}`, saveEditPostInfo).then((response) => {
      dispatch(editPost(saveEditPostInfo))
    })
  }
}

export function deletePost(deletePostId) {
  return {type: 'DELETE_POST', deletePostId}
}

export function killPost(userId, removePost) {
  console.log(removePost)
  return function(dispatch) {
    return axios.delete(`/api/users/${userId}/posts/${removePost.id}`).then((response) => {
      dispatch(deletePost(removePost.id))
    })
  }
}
export function editToggle (id) {
  return {
    type: 'EDIT_TOGGLE',
    id
  }
}
export function deleteToggle (id) {
  return {
    type: 'DELETE_TOGGLE',
    id
  }
}
