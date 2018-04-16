import uuid from 'uuid'
import axios from 'axios'

export function incrementPost (index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
// export function editPost (id, userId) {
//   return {
//     type: 'ADD_POST',
//     post: [{
//       body:'',
//       user:`${userId}`
//     }]
//
//
//     ,
//     likes: false
//   }
// }

export function addPost(addPostToUser, userId) {
  return {type: 'ADD_POST', addPostToUser, userId}
}

export function saveNewPost(saveNewPostInfo) {
  return function(dispatch) {
    return axios.get('/api/users', saveNewPostInfo).then((response) => {
      dispatch(addPost(response.data))
    })
  }
}

export function editPost(editPostInfo) {
  return {type: 'EDIT_POST', editPostInfo}
}

export function saveEditPost(saveEditPostInfo) {
  return function(dispatch) {
    return axios.get('/api/users', saveEditPostInfo).then((response) => {
      dispatch(editPost(response.data))
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
export function deletePost (id) {
  return {
    type: 'DELETE_POST',
    id
  }
}
