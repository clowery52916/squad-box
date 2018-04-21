import uuid from 'uuid'
import axios from 'axios'

export function addPost (body) {
  return {
    type: 'ADD_POST',
    post: {
      id: uuid(),
      body: body,
      completed: true
    }
  }
}

export function saveNewPost(saveNewPostInfo) {
  return function(dispatch) {
    return axios.post('/api/users/userId/posts', saveNewPostInfo).then((response) => {
      dispatch(addPost(response.data))
    })
  }
}
export function editPost (id, body) {
  return {
    type: 'EDIT_POST',
    id,
    body
  }
}
export function saveEditedPost(saveEdittedPost) {
  return function(dispatch) {
    return axios.post('/api/users/userId/posts', saveEdittedPost).then((response) => {
      dispatch(editPost(response.data))
    })
  }
}

export function editToggle (id) {
  return {
    type: 'TOGGLE_POST',
    id
  }
}

export function deletePost (id) {
  return {
    type: 'DELETE_POST',
    id
  }
}
export function deleteToggle (id) {
  return {
    type: 'DELETE_POST',
    id
  }
}
